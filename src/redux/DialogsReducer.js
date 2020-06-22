const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    usersDialogs: [
        {id: 1, userName: 'Vasyan'},
        {id: 2, userName: 'Boryan'},
        {id: 3, userName: 'Mixan'},
        {id: 4, userName: 'Mixan'},
        {id: 5, userName: 'Mixan'}
    ],
    messagesData: [
        {id: 1, message: 'Message 1'}
    ]
}

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData,
                    {id: 1, message: action.newMessageText}
                ]
            }

        default:
            return (state);
    }
}


export const addNewMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default DialogsReducer;


