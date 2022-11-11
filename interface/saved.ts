export interface ISaved {
    id?: number;
    savedId: string;
    type: string;
    urlImage: string;
}

export interface SavedState {
    saved: ISaved[] | []
}