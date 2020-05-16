import {reRender} from "../render";

function addPost() {
    if (state.MainContentData.ProfileData.AddPostFormData.textareaData != '') {
        let newPost = {
            id: 5,
            message: state.MainContentData.ProfileData.AddPostFormData.textareaData,
            likeCounter: 0
        };
        state.MainContentData.ProfileData.PostsListData.PostItemData.push(newPost);
        state.MainContentData.ProfileData.AddPostFormData.textareaData = '';
        reRender(state);
    }
}

function addTextAreaChangeToState(textValue) {
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
                addPost: addPost,
                textareaData: '',
                addTextAreaChangeToState: addTextAreaChangeToState
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
            },
            SendMessageFormData: {
                currentMessage: 'hardCode',
                sendCurrentText: function sendCurrentText(a) {
                    state.MainContentData.DialogsData.SendMessageFormData.currentMessage = a;
                    reRender(state);
                },
                addMessage: function () {
                    if (state.MainContentData.DialogsData.SendMessageFormData.currentMessage != 15) {
                        let newMessage = {
                            id: 5,
                            message: state.MainContentData.DialogsData.SendMessageFormData.currentMessage
                        };
                        state.MainContentData.DialogsData.MessagesListData.messagesData.push(newMessage);
                        state.MainContentData.DialogsData.SendMessageFormData.currentMessage = '';
                        reRender(state);
                    }
                }
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



