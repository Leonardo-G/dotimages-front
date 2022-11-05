import { createContext } from 'react';
import { IUser, IUserError } from '../../interface/user';

export interface ContextProps {
    isAuthenticated: boolean;
    user: null | IUser;
    error: IUserError;
    loginUser: ( email: string, password: string ) => void; 
};

export const AuthContext = createContext({} as ContextProps);