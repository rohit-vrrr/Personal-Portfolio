import React from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro() {

    const textRef = React.useRef();

    React.useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 80,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Full-Stack Web Developer", "Front-End Developer", "Back-End Developer", "UX/UI Designer"]
        })
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="bgsquare2"></div>
                <div className="bgsquare3"></div>
                <div className="bgsquare4"></div>
                <div className="wrapper">
                    <span>Front-End Developer</span>
                    <span>Back-End Developer</span>
                    <span>and UX/UI Designer</span>
                    <span>Based in India</span>
                </div>
            </div>
            
            <a href="#aboutme">
                <img src="assets/down-arrow.png" alt="down-arrow" />
            </a>

            <div className="right">
                <div className="bgsquare1"></div>
                <div className="wrapper">
                    <h2>Hello<font color="crimson">.</font></h2>
                    <h2>I am</h2>
                    <h2>Rohit</h2>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    );
}

export default Intro;
