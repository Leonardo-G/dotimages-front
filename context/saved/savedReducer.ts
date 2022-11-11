import { ISaved, SavedState } from '../../interface/saved';
import { IAddSaved, IRevomeSaved, IAddAllSaved } from '../../interface/types';
import { ADD_ALL_SAVED, ADD_SAVED, REMOVE_SAVED } from '../../types/index';

type Action = 
    | { type: IAddSaved, payload: ISaved }
    | { type: IRevomeSaved, payload: string }
    | { type: IAddAllSaved, payload: ISaved[] } 

export const savedReducer = ( state: SavedState, action: Action ): SavedState => {
    switch (action.type) {
        case ADD_ALL_SAVED:
            return {
                ...state,
                saved: action.payload
            };

        case ADD_SAVED:
            return {
                ...state,
                saved: [ ...state.saved, action.payload ]
            }

        case REMOVE_SAVED: 
            return {
                ...state,
                saved: state.saved.filter( f => f.savedId !== action.payload )
            }

        default:
            return {
                ...state
            }
    }
}