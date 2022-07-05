import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Header.scss';
import {Link, NavLink} from 'react-router-dom';



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
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/about">About</NavLink>
                                    <NavLink to="/skills">Skills</NavLink>
                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                    <NavLink to="/experience">Experience</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
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