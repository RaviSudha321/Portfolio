import React from "react";
import './Skills.scss';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';



function Skills() {

    const html = 90;
    const css = 85;
    const bootstrap = 75;
    const jquery = 70;
    const scss = 50;
    const wordpress = 80;
    const react = 40;

    return (

        <>
            <section className="skills_main_sec">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title">My Skills</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className="skills_inner_sec text-start">
                                <div className="skill_box">
                                    <h2 className="skill_title">Html</h2>
                                    <ProgressBar now={html} label={`${html}%`} striped animated />
                                </div>
                                <div className="skill_box">
                                    <h2 className="skill_title">Css</h2>
                                    <ProgressBar now={css} label={`${css}%`} striped animated />
                                </div>
                                <div className="skill_box">
                                    <h2 className="skill_title">Bootstrap</h2>
                                    <ProgressBar now={bootstrap} label={`${bootstrap}%`} striped animated />
                                </div>
                                <div className="skill_box">
                                    <h2 className="skill_title">jQuery</h2>
                                    <ProgressBar now={jquery} label={`${jquery}%`} striped animated />
                                </div>
                                <div className="skill_box">
                                    <h2 className="skill_title">Scss</h2>
                                    <ProgressBar now={scss} label={`${scss}%`} striped animated />
                                </div>
                                <div className="skill_box">
                                    <h2 className="skill_title">WordPress</h2>
                                    <ProgressBar now={wordpress} label={`${wordpress}%`} striped animated />
                                </div>
                                <div className="skill_box">
                                    <h2 className="skill_title">React Js</h2>
                                    <ProgressBar now={react} label={`${react}%`} striped animated />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );

}

export default Skills;