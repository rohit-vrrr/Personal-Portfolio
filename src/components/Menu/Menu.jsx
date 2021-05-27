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
                    <a href="#intro">Home</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#aboutme">About Me</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
