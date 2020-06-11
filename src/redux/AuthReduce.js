let SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    id: null,
    email: null,
    login: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.id, email: action.email, login: action.login
            }
        default:
            return state;
    }
}

export const setAuthData = (id, email, login) => ({type: SET_AUTH_DATA, id, email, login});

export default AuthReducer;
