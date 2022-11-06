export interface IUser {
    name: string;
    email: string;
    urlImage: string;
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