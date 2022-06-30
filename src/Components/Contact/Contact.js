import React from "react";
import './Contact.scss';
import ContactForm from "../Forms/ContactForm";
import {Container, Row, Col} from 'react-bootstrap';
import {FaPhoneAlt, FaRegEnvelope} from 'react-icons/fa';


function Contact() {

    return (

        <>
            <section className="contact_main_sec text-start">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="contact_left_col">
                                <h2 className="title">Get In Touch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <h3>Call Me</h3>
                                <p><a href="#"><span><FaPhoneAlt /></span> +911234567890</a></p>
                                <h3>Location</h3>
                                <p><a href="#"><span><FaRegEnvelope /></span> example@gmail.com</a></p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="contact_form_sec">
                                <ContactForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>  
        </>

    );

}

export default Contact;