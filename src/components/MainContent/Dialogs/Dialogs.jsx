import React from 'react';
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

function Dialogs(props) {

    return (
        <div className={s.messages}>
            <DialogsList DialogsListData={props.DialogsData.DialogsListData}/>
            <MessagesList MessagesListData={props.DialogsData.MessagesListData}/>
        </div>

    );
}

export default Dialogs;