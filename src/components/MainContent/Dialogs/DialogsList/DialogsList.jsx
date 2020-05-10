import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogsList.module.css';

function DialogsList() {

    let usersData = [
        {id: 1, userName: 'Vasyan'},
        {id: 2, userName: 'Boryan'},
        {id: 3, userName: 'Mixan'},
        {id: 4, userName: 'Mixan'},
        {id: 5, userName: 'Mixan'}
    ]

    let DialogList = usersData.map(arr => <div><NavLink activeClassName={s.active} className={s.dialogList}
                                                        to={`/Dialogs/${arr.id}`}>{arr.userName}</NavLink></div>);

    return (
        <div>{DialogList}</div>
    );
}

export default DialogsList;