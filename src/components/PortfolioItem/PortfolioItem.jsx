import React from "react";
import "./portfolioItem.scss";
import { featuredPortfolio,
    reactPortfolio,
    javascriptPortfolio,
    mobilePortfolio } from "../../data";
import CloseIcon from '@material-ui/icons/Close';
import LaunchIcon from '@material-ui/icons/Launch';

function PortfolioItem({ selected, itemOpen, setItemOpen, clickedProject }) {

    var selectedProject = [];

    switch(selected) {
        case("featured"):
            featuredPortfolio.forEach((item) => {
                if(item.title === clickedProject) {
                    selectedProject.push(item);
                }
                return selectedProject;
            });
            break;
        case("react"):
            reactPortfolio.forEach((item) => {
                if(item.title === clickedProject) {
                    selectedProject.push(item);
                }
                return selectedProject;
            });
            break;
        case("javascript"):
            javascriptPortfolio.forEach((item) => {
                if(item.title === clickedProject) {
                    selectedProject.push(item);
                }
                return selectedProject;
            });
            break;
        case("mobile"):
            mobilePortfolio.forEach((item) => {
                if(item.title === clickedProject) {
                    selectedProject.push(item);
                }
                return selectedProject;
            });
            break;
        default:
            //Do Nothing
    }

    function closeItem() {
        setItemOpen(false);
    }

    return (
        <div className={"portfolioItem " + (itemOpen && "active")}>

            <img
                src={selectedProject[0].img}
                alt="img"
            />
            
            <h2>{selectedProject[0].title}</h2>
            <hr className="hrline"></hr>
            <span>{selectedProject[0].desc}</span>

            <div className="buttonContainer">
                <a href={selectedProject[0].link} className="launchButton">
                    <LaunchIcon className="launch" fontSize="small"/>
                    <span>VIEW SITE</span>
                </a>
                
                <a href="#portfolio" className="closeButton" onClick={closeItem}>
                    <CloseIcon className="close" fontSize="large"/>
                </a>
            </div>

        </div>
    );
}

export default PortfolioItem;
