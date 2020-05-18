import {reRender} from "../render";

export function addPost() {
    let newPost = {
        id: 5,
        message: state.MainContentData.ProfileData.AddPostFormData.textareaData,
        likeCounter: 0
    };
    state.MainContentData.ProfileData.PostsListData.PostItemData.push(newPost);
    state.MainContentData.ProfileData.AddPostFormData.textareaData = '';
    reRender(state);
}

export function addTextAreaChangeToState(textValue) {
    state.MainContentData.ProfileData.AddPostFormData.textareaData = textValue;
    reRender(state);
}


let state = {
    MainContentData: {
        ProfileData: {
            PostsListData: {
                PostItemData: [
                    {id: 1, message: 'First post', likeCounter: 15}
                ]
            },
            AddPostFormData: {
                textareaData: 'начальное значение в state',
            }
        },
        DialogsData: {
            DialogsListData: {
                usersDialogsData: [
                    {id: 1, userName: 'Vasyan'},
                    {id: 2, userName: 'Boryan'},
                    {id: 3, userName: 'Mixan'},
                    {id: 4, userName: 'Mixan'},
                    {id: 5, userName: 'Mixan'}
                ]
            },
            MessagesListData: {
                messagesData: [
                    {id: 1, message: 'Message 1'}
                ]
            }
        }
    },
    SideBarData: {
        FriendsPanelSmall: [
            {id: 1, userName: 'Vasyan'},
            {id: 2, userName: 'Boryan'},
            {id: 3, userName: 'Mixan'}]
    },
}

window.state = state;

export default state;



