import React from "react";
import s from './SendMessageForm.module.css';

let SendMessageForm = (props) => {

    let updateNewMessage = (event) => {
        props.updateNewMessage(event.target.value);
    }

    let addNewMessage = () => {
        props.addNewMessage();
    }

    return (
        <div className={s.SendMessageForm}>
            <textarea value={props.newMessageText} onChange={updateNewMessage}
            />
            <button onClick={addNewMessage}>Send</button>
        </div>
    );
}

export default SendMessageForm;