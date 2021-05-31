import React from "react";
import "./aboutme.scss";
import {
    headerAboutMe,
    bodyAboutMe,
    footerAboutMe,
    questionAboutMe,
    featuresAboutMe } from "../../aboutMeData";

function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="mainContainer">
                <div className="mainItem">
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
                        <div className="rightContainer">
                            {
                                featuresAboutMe.map((eachFeature) => (
                                    <div className="item">
                                        <img
                                            src={eachFeature.img}
                                            alt="feature-img"
                                        />
                                        <h3>{eachFeature.title}</h3>
                                        <p>{eachFeature.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
