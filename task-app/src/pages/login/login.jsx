/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './login.css';
import NoticLogo from '../../assets/letter-n.png';
import { Link } from 'react-router-dom'; // Import Link if using react-router-dom

const Login = () => {
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
    <div className="login-page">
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
      <div className="login-container">
        <Card className="login-card mt-2">
          <Card.Body>
            <div className="back-to-landing mb-3">
              <Link to="/" className="text-decoration-none"> 
                <FaArrowLeft className="me-2" />
              </Link>
            </div>
            <Card.Title className="login-title text-center fw-bold mb-4">Login</Card.Title>
            <Form>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className='bold'>Email</Form.Label>
                <Form.Control type="email" placeholder="example@notic.com" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className='bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Input password" />
              </Form.Group>

              <div className="d-flex justify-content-center mb-3">
                <Button type="submit" className="btn-login w-50">
                  Login
                </Button>
              </div>
            </Form>

            <div className="text-left mb-3">
              <a href="#" className="text-decoration-none text-social">Forgot Password?</a>
            </div>

            <div className="text-left mb-3 login-putih">
              Don't have an account? <a href="/register" className="text-decoration-none text-social">Register now</a>
            </div>

            <div className="divider">
              <span className="divider-text login-putih">or</span>
            </div>

            <div className="d-flex justify-content-center mb-2">
              <Button className="btn-login-social w-50 mb-2">
                <img src="../../public/google.svg" alt="Google" className="me-2" /> Sign in with Google
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <Button className="btn-login-social w-50">
                <img src="../../public/discord.svg" alt="Discord" className="me-2" /> Sign in with Discord
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="wave-container">
        <img src="../../public/wavebwh.png" alt="Wave" className="wave-image" />
      </div>
    </div>
  );
};

export default Login;
