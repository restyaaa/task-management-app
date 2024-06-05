
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css"; // Custom styling
import contactImage from "../../assets/contact.png"; // Ensure the correct path to your image
import wave from "../../../public/waves.svg"; // Path to the top wave image
import wavedown from "../../../public/waves-down.svg"; // Path to the bottom wave image

const ContactUs = () => {
  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="text-center mb-4">
          <img src={contactImage} className="img-fluid" alt="Contact Us" />
        </Col>
        <Col md={5} className="contact-form p-4">
          <h2 className="contact-title mb-3">Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control className="form-control-contact" type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control className="form-control-contact" type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control className="form-control-contact" as="textarea" rows={4} placeholder="Enter your message" required />
            </Form.Group>
            <Button className="btn-contact" type="submit" block>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <img
        src={wave} // Switched to the top wave image
        alt="Wave Illustration"
        className="img-fluid wave-background bottom-wave"
      />
    </Container>
  );
};

export default ContactUs;
