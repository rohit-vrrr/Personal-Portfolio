import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data";

function Portfolio() {

    const [selected, setSelected] = React.useState("featured");
    const [data, setData] = React.useState([]);

    const list = [
        { id: "featured", title: "Featured" },
        { id:"web", title: "Web App"},
        { id:"mobile", title: "Mobile App"}
    ];

    React.useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected]);

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

                {data.map((eachData)=> (
                    <div className="item">
                        <img
                            src={eachData.img}
                            alt="img"
                        />
                        <h3>{eachData.title}</h3>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default Portfolio;
