import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/News" activeClassName={s.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;