import React from "react";

function MessagesList(props) {

    return (
        <div>
            {props.messagesData.map(m => <div>{m.message}</div>)}
        </div>
    );
}

export default MessagesList;
