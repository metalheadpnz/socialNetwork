const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.SendMessageFormData = {...state.SendMessageFormData};
            stateCopy.SendMessageFormData.newMessageText = action.textValue;
            return (stateCopy);
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 1,
                message: state.SendMessageFormData.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.MessagesListData = {...state.MessagesListData};
            stateCopy.MessagesListData.messagesData = [...state.MessagesListData.messagesData];
            stateCopy.MessagesListData.messagesData.push(newMessage);
            stateCopy.SendMessageFormData.newMessageText = '';
            return (stateCopy);
        }
        default:
            return (state);
    }
}

export const updateNewMessageActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE, textValue: newText})
export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE})

export default DialogsReducer;


