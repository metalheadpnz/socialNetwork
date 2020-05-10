import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogsList.module.css';

function DialogsList(props) {


    let DialogList = props.usersDialogsData.map(arr =>
        <div><NavLink activeClassName={s.active} className={s.dialogList}
                      to={`/Dialogs/${arr.id}`}>{arr.userName}</NavLink>
        </div>);

    return (
        <div>{DialogList}</div>
    );
}

export default DialogsList;