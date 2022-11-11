import { createContext } from 'react';
import { IUser, IUserError, IUserForm } from '../../interface/user';

export interface ContextProps {
    isAuthenticated: boolean;
    user: null | IUser;
    error: IUserError;
    loading: boolean;
    loginUser: ( email: string, password: string ) => void;
    registerUser: ( user: IUserForm) => void;
    logout: () => void;
    loginRequired: () => void;
};

export const AuthContext = createContext({} as ContextProps);