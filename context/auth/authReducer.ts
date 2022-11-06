import { IUser } from "../../interface/user";
import { AuthState } from "./AuthProvider"

type ActionType = 
    | { type: "USER LOGIN", payload: null | IUser }
    | { type: "ERROR LOGIN", payload: string }

export const authReducer = ( state: AuthState, action: ActionType ): AuthState => {
    switch (action.type) {
        case "USER LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload as IUser
            }

        case "ERROR LOGIN":
            return {
                ...state,
                isAuthenticated: false,
                error: {
                    isError: true,
                    msg: action.payload
                }
            }
            
    
        default:
            return {
                ...state
            }
    }
}