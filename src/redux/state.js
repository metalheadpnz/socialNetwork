import {reRender} from "../render";

function addPost(newPostMessage) {
    let newPost = {
        id: 5,
        message: newPostMessage,
        likeCounter: 0
    };
    state.MainContentData.ProfileData.PostsListData.PostItemData.push(newPost);
    reRender(state);
}


// let addPost = (newPostMessage) => {
//
// }

let state = {
    MainContentData: {
        ProfileData: {
            PostsListData: {
                PostItemData: [
                    {id: 1, message: 'First post', likeCounter: 15},
                    {id: 2, message: 'First post', likeCounter: 15},
                ]

            },
            AddPostFormData: addPost
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
    },
}


export default state;



