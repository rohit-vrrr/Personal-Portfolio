import React from "react";
import "./portfolioItem.scss";

function PortfolioItem({ itemOpen, setItemOpen }) {

    function closeItem() {
        setItemOpen(false);
    }

    return (
        <div className={"portfolioItem " + (itemOpen && "active")}>
            <h1>Portfolio Item</h1>
            <button onClick={closeItem}>Close</button>
        </div>
    );
}

export default PortfolioItem;
