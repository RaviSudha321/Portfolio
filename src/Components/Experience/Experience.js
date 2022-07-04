import React from "react";
import './Experience.scss';
import {Container, Row, Col} from 'react-bootstrap';



function Experience() {

    return (

        <>
            <section className="experience_main_sec">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title">My Experience</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className="experience_content">
                                <div className="experience_box">
                                    <h2 className="company_name">Abc web tech</h2>
                                    <h3 className="designation">Web Developer</h3>
                                    <p class="total_time">Feb 2020 - Feb 2021 </p>
                                </div>
                                <div className="experience_box">
                                    <h2 className="company_name">Abc web tech</h2>
                                    <h3 className="designation">Web Developer</h3>
                                    <p class="total_time">Feb 2020 - Feb 2021 </p>
                                </div>
                                <div className="experience_box">
                                    <h2 className="company_name">Abc web tech</h2>
                                    <h3 className="designation">Web Developer</h3>
                                    <p class="total_time">Feb 2020 - Feb 2021 </p>
                                </div>
                                <div className="experience_box">
                                    <h2 className="company_name">Abc web tech</h2>
                                    <h3 className="designation">Web Developer</h3>
                                    <p class="total_time">Feb 2020 - Feb 2021 </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );

}

export default Experience;