import React from "react";
import s from './SendMessageForm.module.css';

let SendMessageForm = (props) => {


    function sendCurrentText() {
        props.SendMessageFormData.sendCurrentText(val.current.value)
    }



    let send = (param) => alert(param);

    let val = React.createRef();

    return (
        <div className={s.SendMessageForm}>
            <textarea onChange={sendCurrentText} value={props.SendMessageFormData.currentMessage} ref={val}></textarea>
            <button onClick={props.SendMessageFormData.addMessage}>Send</button>
        </div>
    );
}

export default SendMessageForm;