import React, { FC, ReactNode, useReducer } from 'react'

import { UIContext } from './UIContext';
import { UIReducer } from './UIReducer';

import { 
    formCloseAction,
    formLoginAction, 
    formRegisterAction, 
    formsChangeAction
} from '../../actions/UIActions';

interface Props {
    children: ReactNode;
}

export interface UIState{
    showFormLogin: boolean;
    showFormRegister: boolean;
}

const INITIAL_STATE: UIState = {
    showFormLogin: false,
    showFormRegister: false
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( UIReducer, INITIAL_STATE );

    const handleShowLogin = () => {
        dispatch( formLoginAction() )
    }

    const handleShowRegister = ( ) => {
        dispatch( formRegisterAction() )
    }

    const handleCloseForm = () => {
        dispatch( formCloseAction() )
    }

    const handleChangeForms = () => {
        dispatch( formsChangeAction() )
    }

    return (
        <UIContext.Provider value={{
            ...state,

            //METHODS
            handleShowLogin,
            handleShowRegister,
            handleCloseForm,
            handleChangeForms
        }}>
            { children }
        </UIContext.Provider>
    )
}
