import { FavoritesState, IFavorites } from '../../interface/favorites';
import { IAddAllFavorite, IAddFavorite, IRemoveFavorite } from '../../interface/types';
import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_ALL_FAVORITE } from '../../types/index';


type Action = 
    | { type: IAddFavorite, payload: IFavorites }
    | { type: IRemoveFavorite, payload: string }
    | { type: IAddAllFavorite, payload: IFavorites[] }

export const favoritesReducer = ( state: FavoritesState, action: Action ): FavoritesState => {
    switch (action.type) {
        case ADD_ALL_FAVORITE:
            return {
                ...state,
                favorites: action.payload
            };

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [ ...state.favorites, action.payload ]
            }

        case REMOVE_FAVORITE: 
            return {
                ...state,
                favorites: state.favorites.filter( f => f.favoriteId !== action.payload )
            }

        default:
            return {
                ...state
            }
    }
}