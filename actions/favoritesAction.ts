import { IFavorites } from "../interface/favorites";
import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_ALL_FAVORITE } from '../types/index';

export const addFavoriteAction = ( favorite: IFavorites ) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const removeFavoriteAction = ( idFavorite: string ) => {
    return {
        type: REMOVE_FAVORITE,
        payload: idFavorite
    }
}

export const addAllFavoritesAction = ( favorite: IFavorites[] ) => {
    return {
        type: ADD_ALL_FAVORITE,
        payload: favorite
    }
}