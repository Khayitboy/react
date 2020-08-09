import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.item}><NavLink activeClassName={style.active} to="/profile">Profile</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to="/dialogs">Messages</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to="/news">News</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to="/music">Music</NavLink></li>
                <li className={style.item}><NavLink activeClassName={style.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;