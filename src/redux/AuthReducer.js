import {authAPI} from "../api/api";

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
            console.log(action)
            return {
                ...state,
                // id: action.id, email: action.email, login: action.login, isAuth: true
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthData = (id, email, login, isAuth) => ({type: SET_AUTH_DATA, data: {id, email, login, isAuth}});

export const getIsAuth = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthData(id, email, login, true))
                }
            });
    }
}

export const login = (mail, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(mail, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getIsAuth())
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthData(null, null, null, false))
                }
            });
    }
}


export default AuthReducer;
