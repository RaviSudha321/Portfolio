import React, {useState} from 'react';
import './Header.scss';
import menuData from '../Data/MenuData';
import {Container, Row, Col} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import {FaAngleDown} from 'react-icons/fa';



function Header() {

    function addClass(event) {
        event.currentTarget.classList.add('active');
    }

    function removeClass(event) {
        event.currentTarget.classList.remove('active');
    }

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
                                                <li key={index} onMouseEnter={addClass} onMouseLeave={removeClass}>
                                                    <NavLink to={value.path}> 
                                                        {value.item} 
                                                        {'submenu' in value ? <span className='arrow'>{<FaAngleDown />}</span> : '' }
                                                    </NavLink>

                                                    { 'submenu' in value ? 
                                                      <ul className='submenu'>
                                                            {value.submenu.map(function(subvalue){
                                                                return (
                                                                    <>
                                                                        <li>
                                                                            <NavLink to={subvalue.path}>{subvalue.item}</NavLink>
                                                                        </li>     
                                                                    </>
                                                                );
                                                            })}
                                                        </ul>
                                                    : ''

                                                    }
                                                </li>
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