import React, { FC, ReactNode, useContext, useEffect, useReducer } from 'react'

import { useRouter } from 'next/router';
import Cookies from "js-cookie";

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { fetchApiBackend } from '../../utils/fetchApi';
import { 
    IUser, 
    IUserError, 
    IUserForm, 
    IUserErrorApi 
} from '../../interface/user';

import { 
    errorLoginAction, 
    loadingUserAction, 
    loginUserAction,
    logoutUserAction
} from '../../actions/authAction';
import { UIContext } from '../UI/UIContext';

export interface AuthState {
    isAuthenticated: boolean,
    user: null | IUser,
    error: IUserError,
    loading: boolean,
} 

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
        const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

        if ( email === "" || password === "" ){
            dispatch( errorLoginAction("Completá todos los campos") );
            return
        }
        
        if ( !regExp.test(email) ){
            dispatch( errorLoginAction("Ingrese un correo válido") );
            return
        }

        if ( password.length < 6 ){
            dispatch( errorLoginAction("Se requiere 6 caracteres mínimo en la contraseña") );
            return
        }
        
        dispatch( loadingUserAction() );

        try {
            const user = await fetchApiBackend("POST", "user/login", {
                email,
                password
            })
            Cookies.set("user", user.token);
            sessionStorage.setItem("status", "AUTENTICADO");

            const userObject = { 
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl
            }

            sessionStorage.setItem("userInfo", JSON.stringify( userObject ));
            dispatch( loginUserAction(userObject) );

            router.reload()
        } catch (error) {
            const errors = error as IUserErrorApi 

            dispatch( errorLoginAction( errors.msg ) )
            return
        }
    }

    const registerUser = async ( user: IUserForm ) => {
        const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

        if ( user.email === "" || user.password === "" || user.repeatPassword === "" || user.name === "" ){
            dispatch( errorLoginAction("Completá todos los campos") );
            return
        }

        if ( user.name.length < 6 ){
            dispatch( errorLoginAction("El nombre tiene que tener 6 caracteres mínimo") );
            return;
        }
        
        if ( !regExp.test(user.email) ){
            dispatch( errorLoginAction("Ingrese un correo válido") );
            return;
        }

        if ( user.password.length < 6 ){
            dispatch( errorLoginAction("Se requiere 6 caracteres mínimo en la contraseña") )
            return
        }

        if ( user.password !== user.repeatPassword ){
            dispatch( errorLoginAction("Las contraseñas no coinciden") );
            return
        }

        dispatch( loadingUserAction() );

        try {
            const userRegister = await fetchApiBackend("POST", "user/new-user", {
                name: user.name,
                email: user.email,
                password: user.password
            })
            
            Cookies.set("user", userRegister.token);
            sessionStorage.setItem("status", "AUTENTICADO");

            const userObject = { 
                name: userRegister.name,
                email: userRegister.email,
                imageUrl: userRegister.imageUrl
            }

            sessionStorage.setItem("userInfo", JSON.stringify( userObject ));
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
            Cookies.set("user", user.token);
            sessionStorage.setItem("status", "AUTENTICADO");

            const userObject = { 
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl
            }

            sessionStorage.setItem("userInfo", JSON.stringify( userObject ));
            dispatch( loginUserAction(userObject) );

        } catch (error) {
            handleShowLogin();
            Cookies.remove("user");
            sessionStorage.removeItem("userInfo");
            sessionStorage.removeItem("status");
            dispatch( errorLoginAction( "Sesión expirada. Vuelva a iniciar sesión" ) );
            return
        }
    }

    const logout = () => {
        Cookies.remove("user");
        sessionStorage.removeItem("userInfo");
        sessionStorage.removeItem("status");
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
