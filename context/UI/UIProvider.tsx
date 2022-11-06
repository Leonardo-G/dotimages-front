import React, { FC, ReactNode, useReducer } from 'react'
import { UIContext } from './UIContext';
import { UIReducer } from './UIReducer';

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
        dispatch({
            type: "FORM LOGIN"
        })
    }

    const handleShowRegister = ( ) => {
        dispatch({
            type: "FORM REGISTER"
        })
    }

    const handleCloseForm = () => {
        dispatch({
            type: "CLOSE FORM"
        })
    }

    const handleChangeForms = () => {
        dispatch({
            type: "CHANGE FORM"
        })
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
