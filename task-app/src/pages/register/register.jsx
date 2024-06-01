/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import './register.css';
import NoticLogo from '../../assets/letter-n.png';

const Register = () => {
  return (
    <div className="register-page">
      <div className="wave-container-atas mb-5">
        <img src="../../public/waveatas.png" alt="Wave" className="wave-image-atas mb-5" />
      </div>
      <div className="logo-container">
        <img
          src={NoticLogo}
          width="40"
          height="auto"
          className="d-inline-block align-top ms-4 mt-3"
          alt="Notic logo"
        />
        <span className="fw-bold ms-2 mt-3">Notic</span>
      </div>
      <div className="register-container">
        <Card className="register-card">
          <Card.Body>
            <Card.Title className="register-title text-center mb-4">Register</Card.Title>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label className='bold'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Input name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label className='bold'>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@notic.com" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className='bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Input password" />
              </Form.Group>

              <div className="d-flex justify-content-center mb-3">
                <Button type="submit" className="btn-register w-50">
                  Register
                </Button>
              </div>
            </Form>

            <div className="text-left mb-3">
              Already have an account? <a href="/login" className="text-decoration-none">Login here</a>
            </div>

            <div className="register-divider">
              <span className="register-divider-text">or</span>
            </div>

            <div className="d-flex justify-content-center mb-2">
              <Button className="btn-register-social w-50 mb-2">
                <img src="../../public/google.svg" alt="Google" className="me-2" /> Sign Up with Google
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <Button className="btn-register-social w-50">
                <img src="../../public/discord.svg" alt="Discord" className="me-2" /> Sign Up with Discord
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
