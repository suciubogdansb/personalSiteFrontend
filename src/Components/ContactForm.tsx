import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Form, Button, Container, Row} from 'react-bootstrap';
import '../Style/ContactPage.css';
import useEmailService from "../Hooks/useEmailService";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = useEmailService(
        formData,
        setLoading,
        setError,
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(loading)
            return;
        sendEmail();
    };

    return (
        <Container className="ContactFormContainer">
            <div className="ContactHeader">
                <h1 className="ContactTitle">Contact me</h1>
                <p className="ContactSubtitle">Shot me a message and I'll respond in due time</p>
            </div>
            <Form onSubmit={handleSubmit} className="ContactForm">
                <Row className="ContactFormRow">
                    <Form.Group controlId="formName" className="ContactFormGroup">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="ContactFormGroup">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>

                <Form.Group controlId="formMessage" className="ContactFormGroup GroupTextarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={15}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="ContactSubmit">
                    {loading ? 'Sending...' : 'Submit'}
                </Button>
            </Form>
            {error && <p className="Error">{error}</p>}
        </Container>
    );
};