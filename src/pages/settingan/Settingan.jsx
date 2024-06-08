import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext"; // Import ThemeContext
import "./settingan.css";

const Settingan = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Get darkMode value and toggleDarkMode function from ThemeContext

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleProfilePicChange = () => {
    // Implement profile picture change logic here
  };

  return (
    <div style={{ display: "flex" }} className="konten-setting">
      <Container className="mt-4">
        <h4 className="fw-bold">Settings</h4>
        <Row className="mt-4">
          <Col md={6}>
            <Card className="mb-4 card-setting">
              <Card.Body className="card-body-setting">
                <Card.Title>Profile Pic</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <img
                    src="src/assets/restya.jpeg"
                    alt="Profile"
                    className="rounded-circle profile-pic me-3"
                  />
                  <div>
                    <Button variant="primary" onClick={handleProfilePicChange} className="mt-3">
                      New Profile Pic
                    </Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 text-center card-setting">
              <Card.Body className="card-body-setting">
                <Card.Title>Change Your Theme</Card.Title>
                <Card.Text>
                  <Form>
                    <div className="theme-switcher d-flex align-items-center justify-content-center">
                      <span className="me-2">What do you prefer?</span>
                      <Form.Check
                        type="switch"
                        id="theme-switch"
                        checked={darkMode}
                        onChange={toggleDarkMode} // Use toggleDarkMode to enable or disable dark mode
                        className="ms-2"
                      />
                      <span className="ms-2">{darkMode ? "🌜" : "🌞"}</span>
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4 card-setting">
              <Card.Body>
                <Card.Title>Change Username</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentUsername">
                    <Form.Label>Current Username</Form.Label>
                    <Form.Control type="text" placeholder="Current Username" />
                  </Form.Group>
                  <Form.Group controlId="formNewUsername" className="mt-3">
                    <Form.Label>New Username</Form.Label>
                    <Form.Control type="text" placeholder="New Username" />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button variant="secondary" className="mt-3 me-2">
                      Cancel
                    </Button>
                    <Button variant="danger" className="mt-3">
                      Confirm
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 card-setting">
              <Card.Body>
                <Card.Title>Change Password</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Current Password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formNewPassword" className="mt-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button variant="secondary" className="mt-3 me-2">
                      Cancel
                    </Button>
                    <Button variant="danger" className="mt-3">
                      Confirm
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settingan;
