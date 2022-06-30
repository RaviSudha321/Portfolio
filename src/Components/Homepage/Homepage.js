import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import hero_image from '../../Assets/hero-image.png';
import './Homepage.scss';
import {Link} from 'react-router-dom';


function Homepage() {

    return (

        <>
            <section className="homepage_main_sec">
                <div className="hero_sec">
                    <Container>
                        <Row className="hero_sec_row">
                            <Col md={6}>
                                <div className="hero_image">
                                   <img src={hero_image} alt="hero image" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="hero_content">
                                    <span className="greeting_text">Hello!</span>
                                    <h1 className="name">I'm John Duo</h1>
                                    <h2 className="profile">A Web Developer</h2>
                                    <div className="global_btn">
                                        <Link to="/about" className="btn_text">Read More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>

    );

}

export default Homepage;