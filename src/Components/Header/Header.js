import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Header.scss';
import {Link} from 'react-router-dom';



function Header() {

    return (

        <>
            <section id="header_sec" className='header_sec'>
                <Container className="header_container">
                    <Row className='header_row'>
                        <Col className='logo_col' md={4}>
                        <Link exact to="/"><span>Portfolio</span></Link>
                        </Col>
                        <Col className="menu_col" md={8}> 
                            <div className='header_menu'>
                                <ul className='menu'>
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/skills">Skills</Link>
                                    <Link to="/education">Portfolio</Link>
                                    <Link to="/portfolio">Resume</Link>
                                    <Link to="/contact">Contact</Link>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </>

    );

}

export default Header;