import { createContext } from 'react';
import { ISaved } from '../../interface/saved';

export interface ContextProps {
    saved: ISaved[];

    //METHODS
    addSaved: ( saved: ISaved ) => void,
    removeSaved: ( idSaved: string ) => void,
    addAllSaved: () => void
};

export const SavedContext = createContext({} as ContextProps);