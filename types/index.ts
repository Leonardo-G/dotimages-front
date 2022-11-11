import { IAddAllFavorite, IAddAllSaved, IAddFavorite, IAddSaved, IErrorLogin, ILoadingLogin, IRemoveFavorite, IRevomeSaved, IUserLogin, IUserLogout } from '../interface/types';
import { 
    IFormLogin, 
    IFormRegister, 
    ICloseForm, 
    IChangeForm 
} from '../interface/types';

// USER TYPES
export const ERROR_LOGIN: IErrorLogin     = "ERROR_LOGIN";
export const LOADING_LOGIN: ILoadingLogin = "LOADING_USER";
export const USER_LOGIN: IUserLogin       = "USER_LOGIN";
export const USER_LOGOUT: IUserLogout     = "USER_LOGOUT";

// UI REDUCER
export const FORM_LOGIN: IFormLogin         = "FORM_LOGIN";
export const FORM_REGISTER: IFormRegister   = "FORM_REGISTER";
export const CLOSE_FORM: ICloseForm         = "CLOSE_FORM";
export const CHANGE_FORM: IChangeForm       = "CHANGE_FORM";

// FAVORITES REDUCER
export const ADD_FAVORITE: IAddFavorite         = "ADD_FAVORITE";
export const REMOVE_FAVORITE: IRemoveFavorite   = "REMOVE_FAVORITE";
export const ADD_ALL_FAVORITE: IAddAllFavorite  = "ADD_ALL_FAVORITE";

// SAVED REDUCER
export const ADD_SAVED: IAddSaved               = "ADD_SAVED";
export const REMOVE_SAVED: IRevomeSaved         = "REMOVE_SAVED";
export const ADD_ALL_SAVED: IAddAllSaved        = "ADD_ALL_SAVED";