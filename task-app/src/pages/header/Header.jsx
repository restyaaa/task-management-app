import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from "../../assets/letter-n.png"; // Path yang diperbarui

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="containerNotic">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Notic logo"
              />
              <span className="fw-bold">Notic</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/" className="custom-nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/aboutUs" className="custom-nav-link">
                  About Us
                </Nav.Link>
                <NavDropdown
                  title="Others"
                  id="basic-nav-dropdown"
                  className="custom-nav-link"
                >
                  <NavDropdown.Item href="/contactUs">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">a</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">b</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">c</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login" className="custom-login-link">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>

      <div className="content">
        <Outlet />
      </div>
      
    </div>
  );
};

export default Header;
