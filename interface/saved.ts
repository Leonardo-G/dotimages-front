export interface ISaved {
    id?: number;
    savedId: string;
    type: "image" | "videos" | "gifs" | "sticker";
    urlImage: string;
}

export interface SavedState {
    saved: ISaved[] | []
}