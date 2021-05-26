import React from "react";
import TopBar from "./TopBar/TopBar";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <TopBar />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default App;
