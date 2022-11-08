import { IUser } from '../interface/user';
import { 
    ERROR_LOGIN, 
    LOADING_LOGIN, 
    USER_LOGIN,
    USER_LOGOUT
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

export const loginUserAction = ( user: IUser ) => {
    return {
        type: USER_LOGIN,
        payload: user
    }
} 

export const logoutUserAction = () => {
    return {
        type: USER_LOGOUT
    }
}
