import React from "react";
import {connect} from "react-redux";
import FriendsPanelSmall from "./FriendsPanelSmall";

let mapStateToProps = (state) => {
    return {
        FriendsPanelSmall: state.SideBar.FriendsPanelSmall
    }
}

let FriendsPanelSmallContainer = connect(mapStateToProps)(FriendsPanelSmall);

export default FriendsPanelSmallContainer;