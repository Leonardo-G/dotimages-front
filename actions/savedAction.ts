import { IFavorites } from "../interface/favorites";
import { ISaved } from '../interface/saved';

import { 
    ADD_SAVED, 
    REMOVE_SAVED, 
    ADD_ALL_SAVED 
} from '../types/index';

export const addSavedAction = ( saved: ISaved ) => {
    return {
        type: ADD_SAVED,
        payload: saved
    }
}

export const removeSavedAction = ( idSaved: string ) => {
    return {
        type: REMOVE_SAVED,
        payload: idSaved
    }
}

export const addAllSavedAction = ( saved: ISaved[] ) => {
    return {
        type: ADD_ALL_SAVED,
        payload: saved
    }
}