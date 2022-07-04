import React from "react";
import {Container, Row} from 'react-bootstrap';
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import './Footer.scss';

function Footer() {

    return (

        <>
            <section id="footer_sec" className="footer_sec">
                <Container>
                    <Row>
                        <div className="footer_content">
                            <div className="footer_icons">
                                <span className="icon"><a href="#"><FaFacebookF /></a></span>
                                <span className="icon"><a href="#"><FaLinkedinIn /></a></span>
                                <span className="icon"><a href="#"><FaInstagram /></a></span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>

    );

}

export default Footer;