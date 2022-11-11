export interface IFavorites {
    id?: number;
    favoriteId: string;
    type: "image" | "videos" | "gifs" | "sticker";
    urlImage: string;
}

export interface FavoritesState {
    favorites: IFavorites[] | []
}