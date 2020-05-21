const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const DialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.SendMessageFormData.newMessageText = action.textValue;
            return (state);

        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.SendMessageFormData.newMessageText
            };
            state.MessagesListData.messagesData.push(newMessage);
            state.SendMessageFormData.newMessageText = '';
           return (state);

        default: return (state);
    }
}

export const updateNewMessageActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE, textValue: newText})
export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE})

export default DialogsReducer;


