import React from 'react';
import s from "./Messages.module.css";
import UsersConversationList from "./UsersConversationList/UsersConversationList";
import MessagesList from "./MessagesList/MessagesList";

function Messages(props) {

    return (
        <div className={s.messages}>
            <UsersConversationList/>
            <MessagesList messagesData={props.messagesData}/>
        </div>

    );
}

export default Messages;