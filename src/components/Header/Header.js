import React from 'react';
import logo from '../../Image/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt=""/>
          <nav>
                <a href="/home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;