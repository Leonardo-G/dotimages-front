import { 
    CHANGE_FORM, 
    CLOSE_FORM, 
    FORM_LOGIN, 
    FORM_REGISTER 
} from '../types/index'; 

export const formLoginAction = () => {
    return {
        type: FORM_LOGIN
    }
}

export const formRegisterAction = () => {
    return {
        type: FORM_REGISTER
    }
}

export const formCloseAction = () => {
    return {
        type: CLOSE_FORM
    }
}

export const formsChangeAction = () => {
    return {
        type: CHANGE_FORM
    }
}