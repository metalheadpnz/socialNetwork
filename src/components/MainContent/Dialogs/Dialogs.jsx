import React from 'react';
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import SendMessageFormContainer from "./SendMessageForm/SendMessageFormContainer";

function Dialogs(props) {

    return (
        <div className={s.messages}>
            <DialogsList DialogsListData={props.DialogsData.DialogsListData}/>
            <MessagesList MessagesListData={props.DialogsData.MessagesListData}/>
            <SendMessageFormContainer/>
        </div>

    );
}

export default Dialogs;