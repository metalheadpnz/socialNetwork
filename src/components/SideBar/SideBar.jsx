import React from "react";
import s from './SideBar.module.css';
import NavBar from "./NavBar/NavBar";
import FriendsPanelSmall from "./FriendsPanelSmall/FriendsPanelSmall";

function SideBar(props) {

    return (
        <div className={s.SideBar}>
            <NavBar/>
            <FriendsPanelSmall FriendsPanelSmall={props.SideBar.FriendsPanelSmall}/>
        </div>
    )

}

export default SideBar;