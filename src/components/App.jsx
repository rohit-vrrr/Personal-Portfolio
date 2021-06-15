import React from "react";
import TopBar from "./TopBar/TopBar";
import Menu from "./Menu/Menu";
import Intro from "./Intro/Intro";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import "./app.scss";

function App() {

    const [menuOpen, setMenuOpen] = React.useState(false);
    
    return (
        <div className="app">
            <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro />
                <AboutMe />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default App;
