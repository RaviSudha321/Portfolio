import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import './ContactForm.scss';



function ContactForm() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    function handlesubmit(e) {
        e.preventDefault();

        console.log(name, email, subject, message);
        
    }
    
    return (

        <>
            <Form id="contact_form" className="form_contact">
                <fieldset>
                    <Form.Group className="field_group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} value={name} required />
                    </Form.Group>
                    <Form.Group className="field_group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                    </Form.Group> 
                    <Form.Group className="field_group">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" name="subject" placeholder="Enter Subject" onChange={(e)=>setSubject(e.target.value)} value={subject} required />
                    </Form.Group>
                    <Form.Group className="field_group">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" placeholder="Enter Message" rows={5} onChange={(e)=>setMessage(e.target.value)} value={message} required />
                    </Form.Group>
                    <Form.Group className="field_group global_btn submit_btn">
                        <Form.Control type="submit" name="submit" value="Submit" className="btn_text submit_btn_text" onClick={handlesubmit} />
                    </Form.Group>
                </fieldset>
            </Form>
        </>

    );

}

export default ContactForm;