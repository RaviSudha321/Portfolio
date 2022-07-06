import React, {useState} from 'react';
import './Faqs.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { FaqsData } from '../Data/FaqsData';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


function Faqs() {


    const [isActive, setActive] = useState(false);

    function activeTab(e) {
        setActive(!isActive);
    }

    return (

        <>
            <section className='faqs_main_sec'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='title'>Faqs</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className='faqs_content'>
                                <Accordion allowMultipleExpanded allowZeroExpanded>
                                    {FaqsData.map(function(value){
                                        return(
                                            <AccordionItem className='faq_item'>
                                                <AccordionItemHeading className='faq_title'>
                                                    <AccordionItemButton>{value.title}</AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel className='faq_desc'>
                                                    <p>{value.description}</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        );
                                    })}
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );

}

export default Faqs;