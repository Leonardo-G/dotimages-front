import React, { FC, ReactNode, useEffect, useReducer } from 'react'
import { addAllFavoritesAction, addFavoriteAction, removeFavoriteAction } from '../../actions/favoritesAction';
import { FavoritesState, IFavorites } from '../../interface/favorites';
import { FavoritesContext } from './FavoritesContext';
import { favoritesReducer } from './favoritesReducer'
import { fetchApiBackend } from '../../utils/fetchApi';
import Cookies from 'js-cookie';
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
            console.log( results );
            dispatch( addFavoriteAction( favorite ) )
            
        } catch (error) {
            console.log(error)
        }
    }

    const removeFavorite = async ( idFavorite: string ) => {
        
        try {
            await fetchApiBackend( "DELETE", `favorite/${ idFavorite }`, {}, Cookies.get("user") );
            dispatch( removeFavoriteAction( `${ idFavorite }` ) );
            console.log("ELiminado")
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
