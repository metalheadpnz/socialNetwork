const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_DATA = 'UPDATE-TEXTAREA-DATA';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
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
                },
                SendMessageFormData: {
                    newMessageText: 'Значение из стейт'
                }
            }
        },
        SideBarData: {
            FriendsPanelSmall: [
                {id: 1, userName: 'Vasyan'},
                {id: 2, userName: 'Boryan'},
                {id: 3, userName: 'Mixan'}]
        },
    },
    _callSubscriber() {
    },

    getState() {
        return (this._state);
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.MainContentData.ProfileData.AddPostFormData.textareaData,
                    likeCounter: 0
                };
                this._state.MainContentData.ProfileData.PostsListData.PostItemData.push(newPost);
                this._state.MainContentData.ProfileData.AddPostFormData.textareaData = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_TEXTAREA_DATA:
                this._state.MainContentData.ProfileData.AddPostFormData.textareaData = action.textValue;
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE:
                this._state.MainContentData.DialogsData.SendMessageFormData.newMessageText = action.textValue;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:

                let newMessage = {
                    id: 1,
                    message: this._state.MainContentData.DialogsData.SendMessageFormData.newMessageText
                };
                this._state.MainContentData.DialogsData.MessagesListData.messagesData.push(newMessage);
                this._state.MainContentData.DialogsData.SendMessageFormData.newMessageText= '';
                this._callSubscriber(this._state);
                break;


        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateTextareaDataActionCreator = (newPostText) =>
    ({type: UPDATE_TEXTAREA_DATA, textValue: newPostText})

export const updateNewMessageActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE, textValue: newText})
window.store = store;

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE})

export default store;



