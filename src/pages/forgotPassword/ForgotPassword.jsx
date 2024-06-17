import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./forgotPassword.css";
import NoticLogo from "../../assets/letter-n.png";

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
    };

    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem("darkMode");
        return storedMode ? JSON.parse(storedMode) : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Container fluid className="forgot-container">
            <div className="wave-background">
                <img src="public/wavebwh.png" alt="waves" />
            </div>
            <div className="logo-container-fpw">
                <img
                    src={NoticLogo}
                    width="50"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="Notic logo"
                />
                <span className="fw-bold my-2">Notic</span>
            </div>
            <div className="forgot-content">
                <div className="forgot-image">
                    <img src="public/fpw.svg" alt="Forgot Password" />
                </div>
                <div className="forgot-form">
                    <h2 className='text-center'>Forgot Your Password?</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="reset-button">
                            RESET PASSWORD
                        </Button>
                    </Form>
                    <a href="/login" className="back-to-login fw-bolder">Back to Login</a>
                </div>
            </div>
        </Container>
    );
}

export default ForgotPassword;
