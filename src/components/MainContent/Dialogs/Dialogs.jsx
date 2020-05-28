import React from 'react';
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import SendMessageFormContainer from "./SendMessageForm/SendMessageFormContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessagesListContainer from "./MessagesList/MessagesListContainer";

function Dialogs(props) {

    return (
        <div className={s.messages}>
            {/*<DialogsList DialogsListData={props.DialogsData.DialogsListData}/>*/}
            <DialogsListContainer/>
            {/*<MessagesList MessagesListData={props.DialogsData.MessagesListData}/>*/}
            <MessagesListContainer/>
            <SendMessageFormContainer/>
        </div>

    );
}

export default Dialogs;