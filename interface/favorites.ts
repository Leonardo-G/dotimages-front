export interface IFavorites {
    id?: number;
    favoriteId: string;
    type: "image" | "videos" | "gifs" | "stickers";
    urlImage: string;
}

export interface FavoritesState {
    favorites: IFavorites[] | []
}