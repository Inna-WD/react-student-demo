import React from 'react';
import '../../styles/styles.css';
import Logo from '../../img/mc.png';
import NavBar from '../Navigation/NavBar';

const Header = () => {
    return (
        <header className="header">            
            <a href="/" className="logoPlace">
                <img src={Logo} className="logo" alt="Logo"/>
            </a>
            <div className="title">
                <a href="/" data-route="/">My first social app</a>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;