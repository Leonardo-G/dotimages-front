import { IErrorLogin, ILoadingLogin, IUserLogin } from '../interface/types';
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

// UI REDUCER
export const FORM_LOGIN: IFormLogin         = "FORM_LOGIN";
export const FORM_REGISTER: IFormRegister   = "FORM_REGISTER";
export const CLOSE_FORM: ICloseForm         = "CLOSE_FORM";
export const CHANGE_FORM: IChangeForm       = "CHANGE_FORM";