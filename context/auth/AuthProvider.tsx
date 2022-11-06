import React, { FC, ReactNode, useReducer } from 'react'

import { IUser, IUserError, IUserForm } from '../../interface/user';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { 
    errorLoginAction, 
    loadingUserAction 
} from '../../actions/authAction';

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

    const loginUser = ( email: string, password: string ) => {

        const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

        if ( email === "" || password === "" ){
            dispatch( errorLoginAction("Completá todos los campos") )
            return
        }
        
        if ( !regExp.test(email) ){
            dispatch( errorLoginAction("Ingrese un correo válido") )
            return
        }

        if ( password.length < 6 ){
            dispatch( errorLoginAction("Se requiere 6 caracteres mínimo en la contraseña") )
            return
        }
        
        dispatch( loadingUserAction() )
    }

    const registerUser = ( user: IUserForm ) => {
        
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            //Methods
            loginUser,
            registerUser
        }} >
            { children }
        </AuthContext.Provider>
    )
}
