const paths = {
    users: 'users',
    favorites: 'favorites',
    saved: 'saved'
}

export const pathsApi = {
    authLogin: paths.users + '/login',
    authRegister: paths.users,
    authValidate: paths.users + '/validate-token',

    //PATHS FAVORITES
    favorites: paths.favorites,

    //PATHS SAVED,
    saved: paths.saved
}