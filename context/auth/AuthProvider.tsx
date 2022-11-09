import React, { FC, ReactNode, useContext, useEffect, useReducer } from 'react'

import { useRouter } from 'next/router';

import Cookies from "js-cookie";

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { fetchApiBackend } from '../../utils/fetchApi';
import { UIContext } from '../UI/UIContext';

import { 
    IUser, 
    IUserForm, 
    IUserErrorApi, 
    AuthState
} from '../../interface/user';

import { 
    errorLoginAction, 
    loadingUserAction, 
    loginUserAction,
    logoutUserAction
} from '../../actions/authAction';

import { 
    validateBody, 
    validateBodyRegister 
} from '../../utils/validations';

import { 
    insertStorageUser, 
    removeStorageUser 
} from '../../utils/storage';

const INITIAL_STATE: AuthState = {
    isAuthenticated: false,
    user: null,
    error: {
        isError: false,
        msg: ""
    },
    loading: false
}

interface Props {
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, INITIAL_STATE );
    const { handleShowLogin } = useContext( UIContext )
    const router = useRouter();

    useEffect(() => {
        if ( sessionStorage.getItem("status") ){
            const user = JSON.parse(sessionStorage.getItem("userInfo")!) as IUser;

            const userObject = { 
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl
            }

            dispatch( loginUserAction(userObject) );
            return
        }

        if ( !sessionStorage.getItem("status") && Cookies.get("user") ){
            const token: string = Cookies.get("user")!;

            validateToken(token)
                .catch()
        }
    }, [])

    const loginUser = async ( email: string, password: string ) => {
        
        const isError = validateBody( email, password )

        if ( isError.error ) {
            dispatch( errorLoginAction(isError.msg) );
            return;
        }
        
        dispatch( loadingUserAction() );

        try {
            const user = await fetchApiBackend("POST", "user/login", {
                email,
                password
            })
            const userObject = insertStorageUser( user );
            dispatch( loginUserAction(userObject) );

            router.reload()
        } catch (error) {
            const errors = error as IUserErrorApi 

            dispatch( errorLoginAction( errors.msg ) )
            return
        }
    }

    const registerUser = async ( user: IUserForm ) => {
        const isError = validateBodyRegister( user )

        if ( isError.error ) {
            dispatch( errorLoginAction(isError.msg) );
            return;
        }

        dispatch( loadingUserAction() );

        try {
            const userRegister = await fetchApiBackend("POST", "user/new-user", {
                name: user.name,
                email: user.email,
                password: user.password
            })
            
            const userObject = insertStorageUser( userRegister );
            dispatch( loginUserAction(userObject) );

            router.reload()

        } catch (error) {
            const errors = error as IUserErrorApi;

            dispatch( errorLoginAction( errors.msg ) );
            return
        }
    }

    const validateToken = async ( token: string ) => {
        try {
            const user = await fetchApiBackend("POST", "user/validate-token", "", token);
            
            const userObject = insertStorageUser( user );
            dispatch( loginUserAction(userObject) );

        } catch (error) {
            removeStorageUser();
            handleShowLogin();
            dispatch( errorLoginAction( "Sesión expirada. Vuelva a iniciar sesión" ) );
            return
        }
    }

    const logout = () => {
        removeStorageUser();
        dispatch( logoutUserAction() );
        
        router.reload()
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            //Methods
            loginUser,
            registerUser,
            logout
        }} >
            { children }
        </AuthContext.Provider>
    )
}
