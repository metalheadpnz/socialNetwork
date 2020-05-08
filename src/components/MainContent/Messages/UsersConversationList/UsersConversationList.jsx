import React from 'react';
import {NavLink} from "react-router-dom";
import s from './UsersConversationList.module.css';


function UserInList(props) {
    return (
        <div>
            <NavLink className={s.nav} to={`/Messages/${props.id}`} activeClassName={s.active}>{props.user}</NavLink>
        </div>
    );

}


function UsersConversationList(props) {
    return (
        <div>
            <UserInList user='Vasyan' id='1'/>
            <UserInList user='Boryan' id='2'/>
            <UserInList user='Mixan' id='3'/>
        </div>
    );
}

export default UsersConversationList;