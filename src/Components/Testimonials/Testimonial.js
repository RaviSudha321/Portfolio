import React from "react";
import './Testimonial.scss';
import {Container, Row, Col} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import TestimonialData from "../Data/TestimonialData";


function Testimonial() {

    // const options = {
    //     responsive:{
    //         0: {
    //             items: 1,
    //         },
    //         575: {
    //             items: 2,
    //         },
    //         767: {
    //             items: 3,
    //         },
    //         1025: {
    //             items: 4,
    //         }
    //     },
    // }

    return (

        <>
            <section className="testimonials_main_sec">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title">Testimonials</h1>
                            <div className="testimonial_carousel">
                                <OwlCarousel items={1} className="owl-theme" loop autoplay nav dots={false} margin={8}>
                                    {TestimonialData.map (function(value) {
                                        return (

                                            <div className="testimonial_item">
                                                <span className="stars"></span>
                                                <div className="author_img">
                                                    <img src={value.image} alt="author-image" />
                                                </div>
                                                <p>{value.content}</p>
                                                <h3 className="author_name">{value.name}</h3>
                                                <h4 className="author_profile">{value.profile}</h4>
                                            </div>

                                        );
                                    })}
                                </OwlCarousel>  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );

}

export default Testimonial;