import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './About.scss';


function About() {

    return (

        <>
            <section className="about_main_sec">
               <Container>
                    <Row>
                        <Col>
                            <div className="about_description">
                                <h2 className="title">About Me</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="about_detail">
                                <h2 className="title">Details</h2>
                                <div className="about_detail_inner">
                                    <div className="detail_box">
                                        <h3>Name</h3>
                                        <p>John Duo</p>
                                    </div>
                                    <div className="detail_box">
                                        <h3>Age</h3>
                                        <p>27 Years</p>
                                    </div>
                                    <div className="detail_box">
                                        <h3>Education</h3>
                                        <p>Bachelor's of Arts</p>
                                    </div>
                                    <div className="detail_box">
                                        <h3>Current Location</h3>
                                        <p>SAS Nagar (Mohali)</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
               </Container>
            </section>
        </>

    );

}

export default About;