import React from "react";
import './Error.scss'
import {Container, Row, Col} from 'react-bootstrap';



function Error() {

    return (

        <>
            <div className="error_main_sec">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title">Page Not Found</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );

}

export default Error;