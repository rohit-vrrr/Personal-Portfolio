import React from "react";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
    
    function closeMenu() {
        setMenuOpen(false);
    }
    
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={closeMenu}>
                    <a href="#intro">HOME</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#aboutme">ABOUT ME</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#portfolio">PROJECTS</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
