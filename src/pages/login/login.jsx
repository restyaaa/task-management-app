import React, { useState, useContext } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./login.css";
import NoticLogo from "../../assets/letter-n.png";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();
      console.log("Response dari server:", data);

      if (response.ok) {
        const { token, ...user } = data;
        localStorage.setItem("token", token);
        login(user);
        console.log("Login berhasil, mengarahkan ke dashboard...");
        navigate("/DashboardUser");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to login. Please try again later.");
    }
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
              <a href="/" className="text-decoration-none">
                <FaArrowLeft className="me-2" />
              </a>
            </div>
            <Card.Title className="login-title text-center mb-4">
              Login
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsernameOrEmail" className="mb-3">
                <Form.Label className="bold">Username or Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username or email"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <div className="d-flex justify-content-center mb-3">
                <Button type="submit" className="btn-login w-50">
                  Login
                </Button>
              </div>
            </Form>

            <div className="text-left mb-3">
              <a href="#" className="text-decoration-none text-social">
                Forgot Password?
              </a>
            </div>

            <div className="text-left mb-3">
              Don't have an account?{" "}
              <a href="/register" className="text-decoration-none text-social">
                Register now
              </a>
            </div>

            <div className="divider">
              <span className="divider-text">or</span>
            </div>

            <div className="d-flex justify-content-center mb-2">
              <Button className="btn-login-social w-50 mb-2">
                <img
                  src="../../public/google.svg"
                  alt="Google"
                  className="me-2"
                />{" "}
                Sign in with Google
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <Button className="btn-login-social w-50">
                <img
                  src="../../public/discord.svg"
                  alt="Discord"
                  className="me-2"
                />{" "}
                Sign in with Discord
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
