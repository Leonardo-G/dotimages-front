import { 
    ERROR_LOGIN, 
    LOADING_LOGIN 
} from "../types"

export const errorLoginAction = ( error: string ) => {
    return { 
        type: ERROR_LOGIN,
        payload: error
    }
}

export const loadingUserAction = () => {
    return {
        type: LOADING_LOGIN
    }
}
