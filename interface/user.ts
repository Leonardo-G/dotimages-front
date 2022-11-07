export interface IUser {
    name: string;
    email: string;
    imageUrl: string;
}

export interface IUserError {
    isError: boolean;
    msg: string;
}

export interface IUserForm {
    name: string,
    email: string,
    password: string,
    repeatPassword: string;
}

export interface IUserApi extends IUser{
    token: string;
}

export interface IUserErrorApi {
    msg: string;
    error: boolean;
    type: string;
}