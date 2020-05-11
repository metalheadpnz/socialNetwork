import React from "react";

function MessagesList(props) {
    console.log(props.MessagesListData);
    let messagesArr = props.MessagesListData.messagesData.map(m => <div>{m.message}</div>);

    return (
        <div>
            {messagesArr}
        </div>
    );
}

export default MessagesList;
