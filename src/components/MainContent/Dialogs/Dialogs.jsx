import React from 'react';
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

function Dialogs(props) {

    return (
        <div className={s.messages}>
            <DialogsList/>
            <MessagesList messagesData={props.messagesData}/>
        </div>

    );
}

export default Dialogs;