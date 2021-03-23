import * as React from "react";
import { NavLink } from 'react-router-dom';

import "../styles/Nav.css";


function Nav(props) {
    
    return (
        
        <nav className ={"header__nav"}>
            <NavLink className ={"header__nav-item"} activeClassName="selected" to="/about">О нас</NavLink>
            <NavLink className ={"header__nav-item"} activeClassName="selected" to="/conditions">Условия</NavLink>
            <NavLink className ={"header__nav-item"} activeClassName="selected" to="/faq">Частые вопросы</NavLink>
        </nav>
    );
}       


export default Nav;