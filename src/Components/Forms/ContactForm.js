import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import './ContactForm.scss';



function ContactForm() {

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [subject, setSubject] = useState();
    // const [message, setMessage] = useState();

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        type: '',
        message: '',
    });

    const onchange = (event) => {

        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handlesubmit(e) {
        e.preventDefault();

        console.log(state);
        
    }
    
    return (

        <>
            <Form id="contact_form" className="form_contact">
                <fieldset>
                    <Form.Group className="field_group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" onChange={onchange} value={state.name} required />
                    </Form.Group>
                    <Form.Group className="field_group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" onChange={onchange} value={state.email} required />
                    </Form.Group> 
                    <Form.Group className="field_group">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" name="subject" placeholder="Enter Subject" onChange={onchange} value={state.subject} required />
                    </Form.Group>
                    <Form.Group className="field_group checkbox_field">
                        <Form.Label>Business Type</Form.Label>
                        <p>
                            <Form.Check type="radio" id="company" name="type" onChange={onchange} value="company" checked={state.type == 'company'} required />
                            <Form.Label for="company">Company</Form.Label>
                        </p>
                        <p>
                            <Form.Check type="radio" id="individual" name="type" onChange={onchange} value="individual" checked={state.type == 'individual'} required />
                            <Form.Label for="individual">Individual</Form.Label>
                        </p>
                    </Form.Group>
                    {/* <Form.Group className="field_group checkbox_field">
                        <Form.Label>Timings</Form.Label>
                        <p>
                            <Form.Check type="checkbox" id="fulltime" name="timing" onChange={onchange} value="fulltime" required />
                            <label for="fulltime">Full Time</label>
                        </p>
                        <p>
                            <Form.Check type="checkbox" id="parttime" name="timing" onChange={onchange} value="parttime" required />
                            <label for="parttime">Part Time</label>
                        </p>
                        <p>
                            <Form.Check type="checkbox" id="none" name="timing" onChange={onchange} value="none" required />
                            <label for="none">None</label>
                        </p>
                    </Form.Group> */}
                    <Form.Group className="field_group">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" placeholder="Enter Message" rows={5} onChange={onchange} value={state.message} required />
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