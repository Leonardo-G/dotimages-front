import { createContext } from 'react';
import { IUser, IUserError } from '../../interface/user';

export interface ContextProps {
    isAuthenticated: boolean;
    user: null | IUser;
    error: IUserError;
    loading: boolean;
    loginUser: ( email: string, password: string ) => void;
    changeLoading: () => void; 
};

export const AuthContext = createContext({} as ContextProps);