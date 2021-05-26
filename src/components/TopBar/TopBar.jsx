import React from "react";
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

function TopBar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Rohit.</a>
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
                    Right
                </div>
            </div>
        </div>
    );
}

export default TopBar;
