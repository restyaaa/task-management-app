import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import "./settinganAdmin.css";

const SettinganAdmin = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [profilePic, setProfilePic] = useState("src/assets/restya.jpeg");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setNewUsername("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleConfirm = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement the confirm logic here
    alert("Changes saved successfully!");
  };

  return (
    <div className="konten-setting">
      <Container className="mt-4">
        <h4 className="fw-bold mb-4">Settings</h4>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4 card-setting">
              <Card.Body className="card-body-setting">
                <Card.Title className="mb-4">Profile Pic</Card.Title>
                <div className="d-flex flex-column align-items-center">
                  <div className="profile-pic-wrapper position-relative">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="rounded-circle profile-pic mb-3"
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="mt-2"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Change Profile Pic
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleProfilePicChange}
                      accept="image/*"
                      className="d-none"
                    />
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="mb-4 card-setting">
              <Card.Body className="card-body-setting text-center">
                <Card.Title className="mb-2">Change Your Theme</Card.Title>
                <div className="theme-switcher d-flex align-items-center justify-content-center">
                  <span className="me-2">What do you prefer?</span>
                  <Button
                    onClick={toggleDarkMode}
                    variant="outline-secondary"
                    className="ms-2 theme-button"
                  >
                    {darkMode ? <FiSun /> : <FiMoon />}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7}>
            <Card className="mb-4 card-setting">
              <Card.Body className="card-body-setting">
                <Card.Title className="mb-0">Change Username</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentUsername">
                    <Form.Label>Current Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter current username" readOnly value={user?.username || ''} />
                  </Form.Group>
                  <Form.Group controlId="formNewUsername" className="mt-1">
                    <Form.Label>New Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter new username"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleCancel} className="me-3">
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirm}>
                      Save Changes
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <Card className="mb-4 card-setting">
              <Card.Body className="card-body-setting">
                <Card.Title className="mb-0">Change Password</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter current password" />
                  </Form.Group>
                  <Form.Group controlId="formNewPassword" className="mt-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleCancel} className="me-3">
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirm}>
                      Change Password
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

export default SettinganAdmin;
