import React from "react";

function MessagesList() {

    let messagesData = [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'},
        {id: 4, message: 'Message 4'},
        {id: 5, message: 'Message 5'},
    ]


    let messagesArr = messagesData.map(m => <div>{m.message}</div>);

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