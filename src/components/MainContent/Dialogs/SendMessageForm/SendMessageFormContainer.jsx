import React from "react";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/DialogsReducer";
import SendMessageForm from "./SendMessageForm";


let SendMessageFormContainer = (props) => {

    let state = props.store.getState();
    let updateNewMessage = (body) => {
        props.store.dispatch(updateNewMessageActionCreator(body));
    }

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    return (
        <div>
            контейнер
            <SendMessageForm newMessageText={state.Dialogs.SendMessageFormData.newMessageText}
                             updateNewMessage={updateNewMessage}
                             addNewMessage={addNewMessage}/>
        </div>
    );
}


export default SendMessageFormContainer;