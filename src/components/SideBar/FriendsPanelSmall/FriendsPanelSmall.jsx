import React from "react";
import s from './FriendsPanelSmall.module.css';
import {NavLink} from "react-router-dom";

let FriendsPanelSmall = (props) => {

    let url = "http://avotarov.ru/picture/avatarki/17/kartinki/76-5.jpg";
    return (
        <div className={s.FriendsPanelSmall}>
            {props.FriendsPanelSmall.map(m =>
                <div className={s.FriendsPanelSmallItem}>
                    <NavLink activeClassName={s.active} to={`/Dialogs/${m.id}`}>
                        <img src={url} alt=''/>
                        <div>{m.userName}</div>
                    </NavLink>
                </div>
            )}
        </div>
    )

}

export default FriendsPanelSmall;

