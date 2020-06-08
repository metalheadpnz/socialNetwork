const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_DATA = 'UPDATE-TEXTAREA-DATA';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
    postItemData: [
        {id: 1, message: 'First post', likeCounter: 15}
    ],
    newPostText: 'начальное значение в state',
    profileInfo: null

}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '' && state.newPostText !== undefined)
                return {
                    ...state, postItemData: [...state.postItemData, {
                        id: 5,
                        message: state.newPostText,
                        likeCounter: 0
                    }], newPostText: ''
                }
            else return (state);

        case UPDATE_TEXTAREA_DATA:
            return {
                ...state, newPostText: action.textValue
            };

        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }

        default:
            return (state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextareaDataActionCreator = (newPostText) =>
    ({type: UPDATE_TEXTAREA_DATA, textValue: newPostText})

export const SetProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})

export default ProfileReducer;