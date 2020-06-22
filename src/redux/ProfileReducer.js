import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_TEXTAREA_DATA = 'UPDATE-TEXTAREA-DATA';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    postItemData: [
        {id: 1, message: 'initialState post text', likeCounter: 15}
    ],
    profileInfo: null,
    defaultUserPic: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
    status: 'BLL Status'

}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        // case ADD_POST:
        //     if (state.newPostText !== '' && state.newPostText !== undefined)
        //         return {
        //             ...state, postItemData: [...state.postItemData, {
        //                 id: 5,
        //                 message: state.newPostText,
        //                 likeCounter: 0
        //             }], newPostText: ''
        //         }
        //     else return (state);

        case ADD_POST:
            return {
                ...state, postItemData: [...state.postItemData, {
                    id: 5,
                    message: action.newPostText,
                    likeCounter: 0
                }]
            }

        // case UPDATE_TEXTAREA_DATA:
        //     return {
        //         ...state, newPostText: action.textValue
        //     };

        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return (state);
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

// export const updateTextareaDataActionCreator = (newPostText) =>
//     ({type: UPDATE_TEXTAREA_DATA, textValue: newPostText})

export const SetProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        //ДОБАВИТь КРУТИЛКУ!!!!!!
        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(SetProfileInfo(response.data));
            });
    }
}

export const getUsersStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            })
    }
}

export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export default ProfileReducer;