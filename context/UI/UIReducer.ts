import { truncate } from "fs"
import { UIState } from "./UIProvider"

type Action = 
    | { type: "FORM LOGIN" }
    | { type: "FORM REGISTER" }
    | { type: "CLOSE FORM" }
    | { type: "CHANGE FORM" }

export const UIReducer = ( state: UIState, action: Action ): UIState => {
    switch (action.type) {
        case "FORM LOGIN":
            return {
                ...state,
                showFormRegister: false,
                showFormLogin: true
            }

        case "FORM REGISTER": 
            return {
                ...state,
                showFormRegister: true,
                showFormLogin: false
            }

        case "CLOSE FORM":
            return {
                ...state,
                showFormRegister: false,
                showFormLogin: false
            }

        case "CHANGE FORM": 
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