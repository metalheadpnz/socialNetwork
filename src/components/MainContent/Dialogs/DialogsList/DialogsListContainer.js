import React from "react";
import DialogsList from "./DialogsList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        DialogsListData: state.Dialogs.DialogsListData
    }
}

let DialogsListContainer = connect (mapStateToProps)(DialogsList)

export default DialogsListContainer;