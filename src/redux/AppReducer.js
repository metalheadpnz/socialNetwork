import {getIsAuth} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedDone = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(getIsAuth());

    dispatchResult.then(() => {

        dispatch(initializedDone());
    })
}

export default AppReducer