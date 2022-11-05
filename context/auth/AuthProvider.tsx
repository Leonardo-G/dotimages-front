import React, { FC, ReactNode, useReducer } from 'react'
import { IUser, IUserError } from '../../interface/user';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

export interface AuthState {
    isAuthenticated: boolean,
    user: null | IUser,
    error: IUserError
} 

const INITIAL_STATE: AuthState = {
    isAuthenticated: false,
    user: null,
    error: {
        isError: false,
        msg: ""
    }
}

interface Props {
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, INITIAL_STATE )

    const loginUser = ( email: string, password: string ) => {
        const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
        console.log(regExp)
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            //MEthods
            loginUser
        }} >
            { children }
        </AuthContext.Provider>
    )
}
