import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";
import Sidebar from "../../pages/sidebar/Sidebar";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import "./settingan.css";

const Settingan = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session: ", error);
        navigate("/DashboardUser");
        return;
      }

      if (session) {
        setUser(session.user);
      } else {
        navigate("/");
      }
    };

    checkSession();
  }, [navigate]);

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/");
    } else {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar userEmail={user?.email} signOutUser={signOutUser} />
      <Container className="mt-4">
        <h2 className="fw-bold">Settings</h2>
        <Row className="mt-4">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Profile Pic</Card.Title>
                <Card.Text>
                  <img src="path-to-your-profile-pic.jpg" alt="Profile" className="rounded-circle" width="100" height="100" />
                  <div>New Profile Pic</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Theme</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Check 
                      type="switch"
                      id="theme-switch"
                      label="Change Your Theme"
                    />
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
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
                  <Button variant="secondary" className="mt-3 me-2">Cancel</Button>
                  <Button variant="danger" className="mt-3">Confirm</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Change Password</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Current Password" />
                  </Form.Group>
                  <Form.Group controlId="formNewPassword" className="mt-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                  </Form.Group>
                  <Button variant="secondary" className="mt-3 me-2">Cancel</Button>
                  <Button variant="danger" className="mt-3">Confirm</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="danger" className="mt-3" onClick={signOutUser}>Logout</Button>
      </Container>
    </div>
  );
};

export default Settingan;
