import React from "react";
import "./intro.scss"; 

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left"></div>
            <a href="#aboutme">
                <img src="assets/down-arrow.png" alt="down-arrow" />
            </a>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello<font color="red">.</font></h2>
                    <h2>I am</h2>
                    <h2>Rohit</h2>
                    <h3><span></span></h3>
                </div>
            </div>
        </div>
    );
}

export default Intro;
