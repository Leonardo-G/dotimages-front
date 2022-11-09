import { createContext } from 'react';
import { IFavorites } from '../../interface/favorites';

export interface ContextProps {
    favorites: IFavorites[];

    //METHODS
    addFavorite: ( favorite: IFavorites ) => void;
    removeFavorite: ( idFavorite: string ) => void;
};

export const FavoritesContext = createContext({} as ContextProps);