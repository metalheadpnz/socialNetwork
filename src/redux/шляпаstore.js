import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";


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
        this._state.MainContentData.ProfileData = ProfileReducer(this._state.MainContentData.ProfileData, action);
        this._state.MainContentData.DialogsData = DialogsReducer(this._state.MainContentData.DialogsData, action);
        this._callSubscriber(this._state);
    }
}
console.log(store);

export default store;



