import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogsList.module.css';

function DialogsList(props) {

    return (
        <div>
            {props.DialogsListData.usersDialogsData.map(arr =>
                <div><NavLink activeClassName={s.active} className={s.dialogList}
                              to={`/Dialogs/${arr.id}`}>{arr.userName}</NavLink>
                </div>)}
        </div>
    );
}

export default DialogsList;