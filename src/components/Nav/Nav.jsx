import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Messages" activeClassName={s.active}>Messages</NavLink>
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

export default Nav;      