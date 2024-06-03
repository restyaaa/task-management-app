import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./contact.css"; // Custom styling
import contactImage from "../../assets/contact.png"; // Ensure the correct path to your image
import wave from "../../../public/waves.svg"; // Path to the top wave image
import wavedown from "../../../public/waves-down.svg"; // Path to the bottom wave image

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="text-center mb-4">
          <img src={contactImage} className="img-fluid" alt="Contact Us" />
        </Col>
        <Col md={5} className="contact-form p-4">
          <h2 className="contact-title mb-3">Contact Us</h2>
          <Form onSubmit={handleSubmit}>
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
      <Modal show={showModal} onHide={handleClose} centered className="confirmation-modal">
        <Modal.Header closeButton>
          <Modal.Title><i className="bi bi-check-circle-fill"></i> Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for contacting us. We will get back to you soon.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-modal" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactUs;
