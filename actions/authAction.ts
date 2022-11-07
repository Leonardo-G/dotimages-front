import { IUserApi } from '../interface/user';
import { 
    ERROR_LOGIN, 
    LOADING_LOGIN, 
    USER_LOGIN
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

export const loginUserAction = ( user: IUserApi ) => {
    return {
        type: USER_LOGIN,
        payload: {
            name: user.name,
            email: user.email,
            imageUrl: user.imageUrl
        }
    }
} 
