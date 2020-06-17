import React from 'react';
import s from "./Dialogs.module.css";
import SendMessageFormContainer from "./SendMessageForm/SendMessageFormContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessagesListContainer from "./MessagesList/MessagesListContainer";
import {Redirect} from "react-router-dom";


function Dialogs(props) {

    if (!props.isAuth) {
        return (<Redirect to='/Login'/>)
    }

    return (
        <div className={s.messages}>
            <DialogsListContainer/>
            <MessagesListContainer/>
            <SendMessageFormContainer/>

        </div>

    );
}

export default Dialogs;