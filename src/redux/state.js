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
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    message: this._state.MainContentData.ProfileData.AddPostFormData.textareaData,
                    likeCounter: 0
                };
                this._state.MainContentData.ProfileData.PostsListData.PostItemData.push(newPost);
                this._state.MainContentData.ProfileData.AddPostFormData.textareaData = '';
                this._callSubscriber(this._state);
                break;

            case 'UPDATE-TEXTAREA-DATA':
                this._state.MainContentData.ProfileData.AddPostFormData.textareaData = action.textValue;
                this._callSubscriber(this._state);
                break;
        }
    }
}


window.store = store;

export default store;



