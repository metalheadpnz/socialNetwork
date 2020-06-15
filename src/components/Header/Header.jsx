import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    let ligined = <div>
        <div>{props.login}</div>
        <div>{props.id}</div>
    </div>
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? ligined : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;      