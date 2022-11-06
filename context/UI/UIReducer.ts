import { UIState } from "./UIProvider"
import { 
    IChangeForm, 
    ICloseForm, 
    IFormLogin, 
    IFormRegister 
} from '../../interface/types';

import { 
    FORM_LOGIN, 
    FORM_REGISTER, 
    CLOSE_FORM, 
    CHANGE_FORM 
} from '../../types/index';

type Action = 
    | { type: IFormLogin }
    | { type: IFormRegister }
    | { type: ICloseForm }
    | { type: IChangeForm }

export const UIReducer = ( state: UIState, action: Action ): UIState => {
    switch (action.type) {
        case FORM_LOGIN:
            return {
                ...state,
                showFormRegister: false,
                showFormLogin: true
            }

        case FORM_REGISTER: 
            return {
                ...state,
                showFormRegister: true,
                showFormLogin: false
            }

        case CLOSE_FORM:
            return {
                ...state,
                showFormRegister: false,
                showFormLogin: false
            }

        case CHANGE_FORM: 
            return {
                ...state,
                showFormLogin: !state.showFormLogin,
                showFormRegister: !state.showFormRegister
            }
    
        default:
            return {
                ...state
            }
    }
}    