import React from "react";
import s from './SideBar.module.css';
import NavBar from "./NavBar/NavBar";
import FriendsPanelSmall from "./FriendsPanelSmall/FriendsPanelSmall";
import FriendsPanelSmallContainer from "./FriendsPanelSmall/FriendsPanelSmallContainer";

function SideBar(props) {

    return (
        <div className={s.SideBar}>
            <NavBar/>
            {/*<FriendsPanelSmall FriendsPanelSmall={props.SideBar.FriendsPanelSmall}/>*/}
            <FriendsPanelSmallContainer/>
        </div>
    )

}

export default SideBar;