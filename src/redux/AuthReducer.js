import {usersAPI} from "../api/api";

let SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.id, email: action.email, login: action.login, isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthData = (id, email, login) => ({type: SET_AUTH_DATA, id, email, login});

export const getIsAuth = () => {
    return (dispatch) => {
        usersAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    dispatch(setAuthData(id, email, login))
                }
            });
    }
}

export default AuthReducer;
