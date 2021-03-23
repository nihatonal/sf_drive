import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import "../styles/Header.css";
import Nav from "./Nav";


function Header(props) {
   const [open, setMenu] = useState("false");
//    const [close, closeMenu] = useState("true");

    const menuHandler = (e) => {
        e.preventDefault();
        setMenu(!open);
    };
    const autoClose = () => {
        setMenu(true);
    }
    return (
         <header className = {"header content_wrapper"}>
            <div className = {"header__wrapper content-container"}>
                <NavLink onClick={autoClose} className = {"header__logo_wrapper"}  to="/">
                    <div className = {"header__logo"}>
                        <p className = {"header__logo-name"}>SkillDrive</p>
                        <div className = {"header__logo-line first"}></div>
                        <div className = {"header__logo-line second"}></div>
                    </div>
                </NavLink>
                    
                
                <Nav/>

                <div className ={"header__btn"}>
                    <button className ={"header__btn-signin"}>Войти</button>
                </div>

                <div className ={open ? "header__menu-icon" : "header__menu-icon line"} onClick={menuHandler}>
                    <div className ={open ? "header__menu-icon-item" : "header__menu-icon-item line1" }></div>
                    <div className ={open ? "header__menu-icon-item" : "header__menu-icon-item line2" }></div>
                    <div className ={open ? "header__menu-icon-item" : "header__menu-icon-item line3" }></div>
                </div>
                
            </div>
            <div className={open ? "container_hero-openmenu" : "container_hero-openmenu open" }>

                <nav className ={"container_hero-openmenu-nav"}>
                    <NavLink onClick={autoClose} className ={"container_hero-openmenu-nav-item"} activeClassName="selected" to="/about">О нас</NavLink>
                    <NavLink onClick={autoClose} className ={"container_hero-openmenu-nav-item"} activeClassName="selected" to="/conditions">Условия</NavLink>
                    <NavLink onClick={autoClose} className ={"container_hero-openmenu-nav-item"} activeClassName="selected" to="/faq">Частые вопросы</NavLink>
                </nav>

                <div className={"container_hero-openmenu-btn"}>
                    <button className={"container_hero-openmenu-btn-signin"}>Войти</button>
                </div>
            </div>
        </header>
        );
}
export default Header;