import React from "react";
import s from './SideBar.module.css';
import NavBar from "./NavBar/NavBar";
import FriendsPanelSmallContainer from "./FriendsPanelSmall/FriendsPanelSmallContainer";

function SideBar(props) {

    return (
        <div className={s.SideBar}>
            <NavBar/>
            <FriendsPanelSmallContainer/>
        </div>
    )

}

export default SideBar;