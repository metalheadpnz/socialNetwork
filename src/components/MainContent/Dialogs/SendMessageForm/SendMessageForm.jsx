import React from "react";
import s from './SendMessageForm.module.css';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/state";


let SendMessageForm = (props) => {

    let updateNewMessage = (event) => {

        props.dispatch(updateNewMessageActionCreator(event.target.value));
    }

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());

    }

    // let newText = React.createRef()
    return (
        <div className={s.SendMessageForm}>
            <textarea value={props.SendMessageFormData.newMessageText} onChange={updateNewMessage}
                      />
            <button onClick={addNewMessage}>Send</button>
        </div>
    );
}

export default SendMessageForm;