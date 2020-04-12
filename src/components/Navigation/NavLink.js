import React from 'react';
import '../../styles/styles.css';

const NavLink = (props) => {
    return (                    
        <li className="menu-item">
            <a href="/chats" data-route="/">{props.children}</a>
        </li>            
    );
}

export default NavLink;