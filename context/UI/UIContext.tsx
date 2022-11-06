import { createContext } from 'react';

export interface ContextProps {
    showFormLogin: boolean;
    showFormRegister: boolean;
    handleShowLogin: () => void;
    handleShowRegister: () => void;
    handleCloseForm: () => void;
    handleChangeForms: () => void;
};

export const UIContext = createContext({} as ContextProps);