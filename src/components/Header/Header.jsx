import React from 'react';
import s from './Header.module.css'
import Preloader from "../common/Preloader";

function Header(props) {
    return (
        <header className={s.header}>
            <div>{props.id}</div>
            <div>{props.email}</div>
            <div>{props.login}</div>
        </header>
    );
}

export default Header;      