import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";

function Portfolio() {

    const [selected, setSelected] = React.useState("featured");

    const list = [
        { id: "featured", title: "Featured" },
        { id:"web", title: "Web App"},
        { id:"mobile", title: "Mobile App"}
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>

            <ul>
                {list.map((item) => (
                    <PortfolioList
                        id={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                    />
                ))}
            </ul>

            <div className="container">
                <div className="item">
                    <img
                        src="https://moneyexcel.com/wp-content/uploads/2019/09/best-mobile-banking-app.jpg"
                        alt="banking-app" 
                    />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://moneyexcel.com/wp-content/uploads/2019/09/best-mobile-banking-app.jpg"
                        alt="banking-app" 
                    />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://moneyexcel.com/wp-content/uploads/2019/09/best-mobile-banking-app.jpg"
                        alt="banking-app" 
                    />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://moneyexcel.com/wp-content/uploads/2019/09/best-mobile-banking-app.jpg"
                        alt="banking-app" 
                    />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://moneyexcel.com/wp-content/uploads/2019/09/best-mobile-banking-app.jpg"
                        alt="banking-app" 
                    />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://moneyexcel.com/wp-content/uploads/2019/09/best-mobile-banking-app.jpg"
                        alt="banking-app" 
                    />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
