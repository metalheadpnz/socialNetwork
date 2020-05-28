const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_DATA = 'UPDATE-TEXTAREA-DATA';

let initialState = {
    PostsListData: {
        PostItemData: [
            {id: 1, message: 'First post', likeCounter: 15}
        ]
    },
    AddPostFormData: {
        textareaData: 'начальное значение в state',
    }
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.AddPostFormData.textareaData,
                likeCounter: 0
            };

            let stateCopy = {...state};
            stateCopy.PostsListData = {...state.PostsListData};
            stateCopy.PostsListData.PostItemData = [...state.PostsListData.PostItemData]
            stateCopy.PostsListData.PostItemData.push(newPost);

            stateCopy.AddPostFormData = {...state.AddPostFormData}
            stateCopy.AddPostFormData.textareaData = '';
            return (stateCopy);
        }

        case UPDATE_TEXTAREA_DATA: {
            let stateCopy = {...state};

            stateCopy.AddPostFormData = {...state.AddPostFormData}
            stateCopy.AddPostFormData.textareaData = action.textValue;
            return (stateCopy);
        }
        default:
            return (state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextareaDataActionCreator = (newPostText) =>
    ({type: UPDATE_TEXTAREA_DATA, textValue: newPostText})

export default ProfileReducer;