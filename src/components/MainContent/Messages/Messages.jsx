import React from 'react';
import s from "./Messages.module.css";
import UsersConversationList from "./UsersConversationList/UsersConversationList";
import MessagesList from "./MessagesList/MessagesList";

function Messages() {
    return (
        <div className={s.messages}>
            <UsersConversationList />
            <MessagesList/>
        </div>

    );
}

export default Messages;