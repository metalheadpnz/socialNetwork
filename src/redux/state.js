let state = {
    MainContentData: {
        ProfileData: {
            PostsListData: {
                PostItemData: [
                    {id: 1, message: 'First post', likeCounter: 15},
                    {id: 2, message: 'First post', likeCounter: 15},
                    {id: 3, message: 'чета', likeCounter: 10},
                    {id: 4, message: 'Metallica', likeCounter: 100500},
                    {id: 5, message: 'nothing to commit', likeCounter: 666},
                    {id: 6, message: 'Ну хватит уже', likeCounter: 13}
                ]
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
                    {id: 1, message: 'Message 1'},
                    {id: 2, message: 'Message 2'},
                    {id: 3, message: 'Message 3'},
                    {id: 4, message: 'Message 4'},
                    {id: 5, message: 'Message 5'},
                ]
            }
        }
    },
    SideBarData: {
        FriendsPanelSmall: [
            {id: 1, userName: 'Vasyan'},
            {id: 2, userName: 'Boryan'},
            {id: 3, userName: 'Mixan'}]
    }
}


export let addPost = (newPostMessage) => {

    let newPost = {
        id: 5,
        message: newPostMessage,
        likeCounter: 0
    };

    state.MainContentData.ProfileData.PostsListData.PostItemData.push(newPost);
}

export default state;



