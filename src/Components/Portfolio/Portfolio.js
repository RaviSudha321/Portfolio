import React from "react";
import './Portfolio.scss';
import PortfolioItem from './PortfolioItem.js';
import { Container, Row, Col } from "react-bootstrap";
import PortfoliosData from '.././Data/PortfoliosData.js';


function Portfolio() {

    return (

        <>
            <section className="portfolio_main_sec">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title">Portfolios</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className="portfolio_content">
                                {PortfoliosData.map ( function (value){
                                    return (
                                        <PortfolioItem 
                                            title={value.Name} 
                                            description={value.Description} 
                                            image={value.Image} 
                                        />
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );

}

export default Portfolio;