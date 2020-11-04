import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <a href="#s" className="logo"><img src={logo} alt="Logo" /><span>React App</span></a>
                    <div className="login_block">
                        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;