import React from "react";
import s from './SendMessageForm.module.css';

let SendMessageForm = (props) => {

    return (
        <div className={s.SendMessageForm}>
            <textarea></textarea>
            <button>Send</button>
        </div>
    );
}

export default SendMessageForm;