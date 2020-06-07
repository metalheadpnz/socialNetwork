
import {connect} from "react-redux";
import MessagesList from "./MessagesList";

let mapStateToProps = (state) => {
    return {
        messagesData: state.DialogsPage.messagesData
    }
}

let MessagesListContainer = connect (mapStateToProps)(MessagesList);

export default MessagesListContainer;