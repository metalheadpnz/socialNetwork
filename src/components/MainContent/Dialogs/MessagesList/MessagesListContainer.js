import React from "react";
import {connect} from "react-redux";
import MessagesList from "./MessagesList";

let mapStateToProps = (state) => {
    return {
        messagesData: state.Dialogs.messagesData
    }
}

let MessagesListContainer = connect (mapStateToProps)(MessagesList);

export default MessagesListContainer;