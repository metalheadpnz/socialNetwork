import React from 'react';
import s from './Header.module.css'
// import Preloader from "../common/Preloader";
import {NavLink} from "react-router-dom";

function Header(props) {

    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            {/*<div>{props.id}</div>*/}
            {/*<div>{props.email}</div>*/}
            {/*<div>{props.login}</div>*/}
        </header>
    );
}

export default Header;      