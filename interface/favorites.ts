export interface IFavorites {
    id?: number;
    favoriteId: string;
    type: string;
    urlImage: string;
}

export interface FavoritesState {
    favorites: IFavorites[] | []
}