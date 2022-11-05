import { createContext } from 'react';

export interface ContextProps {
    showFormLogin: boolean;
};

export const UIContext = createContext({} as ContextProps);