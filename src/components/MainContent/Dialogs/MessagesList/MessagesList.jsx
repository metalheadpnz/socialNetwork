import React from "react";

function MessagesList(props) {

    let messagesArr = props.messagesData.map(m => <div>{m.message}</div>);


    return (
        <div>
            {messagesArr}
        </div>
    );
}

export default MessagesList;
//
// var names = ['HTML', 'CSS', 'JavaScript'];
//
// var nameLengths = names.map(function(name) {
//     return name.length;
// });