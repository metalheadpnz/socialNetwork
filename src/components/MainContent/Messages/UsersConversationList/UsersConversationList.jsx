import React from 'react';
import {NavLink} from "react-router-dom";
import s from './UsersConversationList.module.css';


function UserInList(props) {
    return (
        <div>
            <NavLink className={s.usersListItem} to={`/Messages/${props.id}`} activeClassName={s.active}>
                {props.userName}
            </NavLink>
        </div>
    );

}


function UsersConversationList(props) {

    let usersInListData = [
        {id: 1, userName: 'Vasyan'},
        {id: 2, userName: 'Boryan'},
        {id: 3, userName: 'Mixan'},
        {id: 4, userName: 'Mixan'},
        {id: 5, userName: 'Mixan'}
    ]


    let usersInListArr = usersInListData.map(user => <UserInList userName={user.userName} id={user.id}/>)

    return (
        <div>
            {usersInListArr}
        </div>
    );
}

export default UsersConversationList;