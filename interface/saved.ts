export interface ISaved {
    id?: number;
    savedId: string;
    type: "image" | "videos" | "gifs" | "stickers";
    urlImage: string;
}

export interface SavedState {
    saved: ISaved[] | []
}