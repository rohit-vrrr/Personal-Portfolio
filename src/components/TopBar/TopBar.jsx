import React from "react";
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">R</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91 9538-192017</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>vr.rohit03@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
