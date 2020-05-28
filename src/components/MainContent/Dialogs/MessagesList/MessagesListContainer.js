import React from "react";
import {connect} from "react-redux";
import MessagesList from "./MessagesList";

let mapStateToProps = (state) => {
    return {
        MessagesListData: state.Dialogs.MessagesListData
    }
}

let MessagesListContainer = connect (mapStateToProps)(MessagesList);

export default MessagesListContainer;