import React, { FC, ReactNode, useContext, useEffect, useReducer } from 'react'

import Cookies from 'js-cookie';
import { fetchApiBackend } from '../../utils/fetchApi';
import { removeStorageUser } from '../../utils/storage';
import { ISaved, SavedState } from '../../interface/saved';
import { savedReducer } from './savedReducer';

import { 
    addAllSavedAction, 
    addSavedAction, 
    removeSavedAction 
} from '../../actions/savedAction';
import { SavedContext } from './SavedContext';
import { pathsApi } from '../../common/path';

const INITIAL_STATE: SavedState = {
    saved: []
}

interface Props {
    children: ReactNode;
}

export const SavedProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( savedReducer, INITIAL_STATE );

    useEffect(() => {
        if ( sessionStorage.getItem("status") === "AUTENTICADO" ){
            addAllSaved()
                .catch()
        }
    }, [])

    const addSaved = async ( saved: ISaved ) => {
        try {
            const results = await fetchApiBackend( "POST", pathsApi.saved, saved, Cookies.get("user") );
            dispatch( addSavedAction( results as ISaved ) );
            
        } catch (error) {
            removeStorageUser();
        }
    }

    const removeSaved = async ( idSaved: string ) => {
        
        try {
            await fetchApiBackend( "DELETE", `${ pathsApi.saved }/${ idSaved }`, {}, Cookies.get("user") );
            dispatch( removeSavedAction( `${ idSaved }` ) );
            
        } catch (error) {
            
            removeStorageUser();
        }
    }

    const addAllSaved = async () => {
        try {
            const results = await fetchApiBackend( "GET", pathsApi.saved, {}, Cookies.get("user") );
            dispatch( addAllSavedAction( results as ISaved[] ) );
        } catch (error) {
            removeStorageUser();
            console.log(error);
        }
    }

    return (
        <SavedContext.Provider value={{
            ...state,

            //methods
            addSaved,
            removeSaved,
            addAllSaved
        }}>
            { children }
        </SavedContext.Provider>
    )
}