import React from 'react';
import logo from './../../logo.svg';
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <a href="#s" className="logo"><img src={logo} alt="Logo" /><span>React App</span></a>
                </div>
            </div>
        </header>
    );
}

export default Header;