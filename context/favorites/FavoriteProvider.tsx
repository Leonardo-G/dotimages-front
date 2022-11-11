import React, { FC, ReactNode, useContext, useEffect, useReducer } from 'react'

import Cookies from 'js-cookie';

import { 
    addAllFavoritesAction, 
    addFavoriteAction, 
    removeFavoriteAction 
} from '../../actions/favoritesAction';

import { FavoritesState, IFavorites } from '../../interface/favorites';
import { FavoritesContext } from './FavoritesContext';
import { favoritesReducer } from './favoritesReducer'
import { fetchApiBackend } from '../../utils/fetchApi';
import { removeStorageUser } from '../../utils/storage';

const INITIAL_STATE: FavoritesState = {
    favorites: []
}

interface Props {
    children: ReactNode;
}

export const FavoriteProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( favoritesReducer, INITIAL_STATE );

    useEffect(() => {
        if ( sessionStorage.getItem("status") === "AUTENTICADO"){
            addAllFavorites()
                .catch()
        }
    }, [])

    const addFavorite = async ( favorite: IFavorites ) => {
        try {
            const results = await fetchApiBackend( "POST", "favorite/new", favorite, Cookies.get("user") );
            dispatch( addFavoriteAction( results as IFavorites ) );
            
        } catch (error) {
            removeStorageUser();
        }
    }

    const removeFavorite = async ( idFavorite: string ) => {
        
        try {
            await fetchApiBackend( "DELETE", `favorite/${ idFavorite }`, {}, Cookies.get("user") );
            dispatch( removeFavoriteAction( `${ idFavorite }` ) );
            
        } catch (error) {
            
            removeStorageUser();
        }
    }

    const addAllFavorites = async () => {
        try {
            const results = await fetchApiBackend( "GET", "favorite/", {}, Cookies.get("user") );
            dispatch( addAllFavoritesAction( results as IFavorites[] ) );
            
        } catch (error) {
            removeStorageUser();
        }
    }

    return (
        <FavoritesContext.Provider value={{
            ...state,

            //methods
            addFavorite,
            removeFavorite,
            addAllFavorites
        }}>
            { children }
        </FavoritesContext.Provider>
    )
}
