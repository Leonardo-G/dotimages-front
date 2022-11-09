import { FavoritesState, IFavorites } from '../../interface/favorites';
import { IAddFavorite, IRemoveFavorite } from '../../interface/types';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../types/index';


type Action = 
    | { type: IAddFavorite, payload: IFavorites }
    | { type: IRemoveFavorite, payload: string }

export const favoritesReducer = ( state: FavoritesState, action: Action ): FavoritesState => {
    switch (action.type) {
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