import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import { featuredPortfolio,
    reactPortfolio,
    javascriptPortfolio,
    mobilePortfolio } from "../../data";

function Portfolio() {

    const [selected, setSelected] = React.useState("featured");
    const [data, setData] = React.useState([]);

    const list = [
        { id: "featured", title: "FEATURED" },
        { id:"react", title: "REACT-JS"},
        { id:"javascript", title: "JAVASCRIPT"},
        { id:"mobile", title: "MOBILE APP" }
    ];

    React.useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "javascript":
                setData(javascriptPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected]);

    function handleOnClick(eachData) {
        alert(eachData.title);
    }

    return (
        <div className="portfolio" id="portfolio">
            <h1>PROJECTS</h1>
            <h2>_________</h2>

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
                {
                    data.map((eachData)=> (
                        <div className="item">
                            <img
                                src={eachData.img}
                                alt="img"
                            />
                            <h3>{eachData.title}</h3>
                            <button onClick={(() => handleOnClick(eachData))}>LEARN MORE</button>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Portfolio;
