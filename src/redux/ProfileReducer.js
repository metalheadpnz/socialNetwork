const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_DATA = 'UPDATE-TEXTAREA-DATA';

const ProfileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.AddPostFormData.textareaData,
                likeCounter: 0
            };
            state.PostsListData.PostItemData.push(newPost);
            state.AddPostFormData.textareaData = '';
            return (state);

        case UPDATE_TEXTAREA_DATA:

            state.AddPostFormData.textareaData = action.textValue;
            return (state);

        default:  return (state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextareaDataActionCreator = (newPostText) =>
    ({type: UPDATE_TEXTAREA_DATA, textValue: newPostText})

export default ProfileReducer;