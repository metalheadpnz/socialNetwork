import DialogsList from "./DialogsList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    
    return {
        usersDialogs: state.DialogsPage.usersDialogs
    }
}

let DialogsListContainer = connect(mapStateToProps)(DialogsList)

export default DialogsListContainer;