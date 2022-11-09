import React, { FC, ReactNode, useReducer } from 'react'
import { addFavoriteAction, removeFavoriteAction } from '../../actions/favoritesAction';
import { FavoritesState, IFavorites } from '../../interface/favorites'
import { FavoritesContext } from './FavoritesContext';
import { favoritesReducer } from './favoritesReducer'

const INITIAL_STATE: FavoritesState = {
    favorites: []
}

interface Props {
    children: ReactNode;
}

export const FavoriteProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( favoritesReducer, INITIAL_STATE );

    const addFavorite = ( favorite: IFavorites ) => {
        dispatch( addFavoriteAction( favorite ) )
    }

    const removeFavorite = ( idFavorite: string ) => {
        dispatch( removeFavoriteAction( idFavorite ) );
    } 

    return (
        <FavoritesContext.Provider value={{
            ...state,

            //methods
            addFavorite,
            removeFavorite
        }}>
            { children }
        </FavoritesContext.Provider>
    )
}
