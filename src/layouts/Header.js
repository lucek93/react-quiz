import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo2.png';

const Header = () => (
    <header className="header">
        <img src={logo} alt="logo" />
    </header>
)

export default Header;