export const getUsersStart = () => ({
    type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users,
});

export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE",
});

export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
});

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
});

export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
});

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
});

export const deleteUserStart = () => ({
    type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id,
});

export const deleteUserFailure = () => ({
    type: "DELETE_USER_FAILURE",
});