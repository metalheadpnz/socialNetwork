import React from "react";
import s from './SendMessageForm.module.css';

let SendMessageForm = (props) => {

   let send = (param) => alert(param);


   let val = React.createRef();

    return (
        <div className={s.SendMessageForm}>
            <textarea ref={val}></textarea>
            <button onClick={()=> send(val.current.value) }>Send</button>
        </div>
    );
}

export default SendMessageForm;