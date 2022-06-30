import React from "react";
import './Portfolio.scss';



function PortfolioItem(props) {

    return (

        <>
            <div className="portfolio_item">
                <div className="portfolio_img">
                    <img src={props.image} alt="pic" />
                </div>
                <div className="portfolio_title">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </>

    );

}


export default PortfolioItem;