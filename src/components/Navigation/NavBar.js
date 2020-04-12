import React from 'react';
import '../../styles/styles.css';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <ul className="navbar">                
            <NavLink>CHATs</NavLink>
            <NavLink>CALLs</NavLink>
            <NavLink>USERs</NavLink>
            <NavLink>GROUPs</NavLink>            
        </ul>
    );
}

export default NavBar;