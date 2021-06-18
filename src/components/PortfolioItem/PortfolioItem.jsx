import React from "react";
import "./portfolioItem.scss";
import { featuredPortfolio,
    reactPortfolio,
    javascriptPortfolio,
    mobilePortfolio } from "../../data";

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
            <button onClick={closeItem}>Close</button>
        </div>
    );
}

export default PortfolioItem;
