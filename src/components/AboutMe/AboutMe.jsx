import React from "react";
import "./aboutme.scss";
import { headerAboutMe, bodyAboutMe, footerAboutMe, questionAboutMe } from "../../aboutMeData";

function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/profile-pic2.png" alt="profile-pic" />
                            </div>
                            <h2>{questionAboutMe}</h2>
                            <h3>{headerAboutMe}</h3>
                            <p>{bodyAboutMe}</p>
                            <span>{footerAboutMe}</span>
                        </div>
                    </div>
                    <div className="right">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
