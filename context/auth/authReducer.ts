import { IUser } from "../../interface/user";
import { AuthState } from "./AuthProvider"

import { 
    IErrorLogin,
    ILoadingLogin,
    IUserLogin 
} from "../../interface/types";

import { 
    ERROR_LOGIN, 
    LOADING_LOGIN, 
    USER_LOGIN 
} from "../../types";

type ActionType = 
    | { type: IUserLogin, payload: null | IUser }
    | { type: IErrorLogin, payload: string }
    | { type: ILoadingLogin }

export const authReducer = ( state: AuthState, action: ActionType ): AuthState => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload as IUser
            }

        case ERROR_LOGIN:
            return {
                ...state,
                isAuthenticated: false,
                error: {
                    isError: true,
                    msg: action.payload
                }
            }
        
        case LOADING_LOGIN:
            return {
                ...state,
                error:{
                    msg: "",
                    isError: false
                },
                loading: true
            }
    
        default:
            return {
                ...state
            }
    }
}