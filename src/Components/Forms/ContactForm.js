import React from "react";
import Form from 'react-bootstrap/Form';
import './ContactForm.scss';



function ContactForm() {

    return (

        <>
            <Form className="form_contact">
                <fieldset>
                    <Form.Group className="field_group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="field_group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" required />
                    </Form.Group> 
                    <Form.Group className="field_group">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter Subject" required />
                    </Form.Group>
                    <Form.Group className="field_group">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Message" rows={5} required />
                    </Form.Group>
                    <Form.Group className="field_group global_btn submit_btn">
                        <Form.Control type="submit" value="Submit" className="btn_text submit_btn_text" />
                    </Form.Group>
                </fieldset>
            </Form>
        </>

    );

}

export default ContactForm;