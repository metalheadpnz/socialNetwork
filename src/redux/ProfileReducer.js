const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_DATA = 'UPDATE-TEXTAREA-DATA';

let initialState = {
    postItemData: [
        {id: 1, message: 'First post', likeCounter: 15}
    ],
    newPostText: 'начальное значение в state',

}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state, postItemData: [...state.postItemData, {
                    id: 5,
                    message: state.newPostText,
                    likeCounter: 0
                }], newPostText: ''}

        case UPDATE_TEXTAREA_DATA:
            return {
                ...state, newPostText: action.textValue
            };

        default:
            return (state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextareaDataActionCreator = (newPostText) =>
    ({type: UPDATE_TEXTAREA_DATA, textValue: newPostText})

export default ProfileReducer;