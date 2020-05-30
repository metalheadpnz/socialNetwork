import React from "react";

function MessagesList(props) {
let key=0;
    return (
        <div>
            {props.messagesData.map(m => <div key={key++}>{m.message}</div>)}
        </div>
    );
}

export default MessagesList;
