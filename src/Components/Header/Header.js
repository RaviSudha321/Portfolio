import React from 'react';
import './Header.scss';
import menuData from '../Data/MenuData';
import {Container, Row, Col} from 'react-bootstrap';
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
                                    {menuData.map(function(value, index){
                                        return (
                                            <>
                                                <NavLink to={value.path}>{value.item}</NavLink>
                                            </>
                                        );
                                    })}
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