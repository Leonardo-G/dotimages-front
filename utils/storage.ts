//ARCHIVO PARA MANEJAR EL SESSION STORAGE Y LOS COOKIES


import Cookies from "js-cookie";
import { 
    IUser, 
    IUserApi 
} from "../interface/user";

export const insertStorageUser = ( user: IUserApi ): IUser => {
    const userObject = { 
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl
    }
    
    Cookies.set("user", user.token);
    sessionStorage.setItem("status", "AUTENTICADO");
    sessionStorage.setItem("userInfo", JSON.stringify( userObject ));

    return userObject
}

export const removeStorageUser = () => {
    Cookies.remove("user");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("status");
}