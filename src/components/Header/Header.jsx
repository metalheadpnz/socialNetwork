import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    console.log(props)
    let logined = <div>
        <div>{props.login}</div>
        <div>{props.id}
            <button onClick={props.logout}>log out</button>
        </div>
    </div>
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? logined
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;      