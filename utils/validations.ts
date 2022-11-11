import { IUserForm } from "../interface/user";

interface IErrorReturn {
    error: boolean;
    msg: string;
}

export const validateBody = ( email: string, password: string ): IErrorReturn => {
    const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    if ( email === "" || password === "" ){
        return {
            error: true,
            msg: "Completá todos los campos"
        }
    }
    
    if ( !regExp.test(email) ){
        return {
            error: true,
            msg: "Ingrese un correo válido"
        }
    }

    if ( password.length < 6 ){
        return {
            error: true,
            msg: "Se requiere 6 caracteres mínimo en la contraseña"
        }
    }

    return {
        error: false,
        msg: ""
    }
}

export const validateBodyRegister = ( user: IUserForm ): IErrorReturn => {
    const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    if ( user.email === "" || user.password === "" || user.repeatPassword === "" || user.name === "" ){
        return {
            error: true,
            msg: "Completá todos los campos"
        }
    }

    if ( user.name.length < 6 ){
        return {
            error: true,
            msg: "El nombre tiene que tener 6 caracteres mínimo"
        }
    }
    
    if ( !regExp.test(user.email) ){
        return {
            error: true,
            msg: "Ingrese un correo válido"
        }
    }

    if ( user.password.length < 6 ){
        return {
            error: true,
            msg: "Se requiere 6 caracteres mínimo en la contraseña"
        }
    }

    if ( user.password !== user.repeatPassword ){
        return {
            error: true,
            msg: "Las contraseñas no coinciden"
        }
    }

    return {
        error: false,
        msg: ""
    }
}