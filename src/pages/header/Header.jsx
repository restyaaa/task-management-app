import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from "../../assets/letter-n.png"; // Path yang diperbarui
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Save into local storage
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
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid className="containerNotic">
          <Container className="container-head">
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
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="navLink align-items-end"
            >
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" className="custom-nav-link">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/aboutUs"
                  className="custom-nav-link"
                >
                  About Us
                </Nav.Link>
                <NavDropdown
                  title="Others"
                  id="basic-nav-dropdown"
                  className="custom-nav-link"
                >
                  <NavDropdown.Item as={NavLink} to="/contactUs">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">a</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">b</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">c</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="custom-login-link"
                >
                  Login
                </Nav.Link>
                <Nav.Link onClick={toggleDarkMode} className="custom-nav-link">
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>

      <div className="content">
        <Outlet />
      </div>

      <footer className="footer">
        <Container>
          <div className="row footer-top">
            <div className="col-md-3">
              <div className="footer-logo-containe">
                <img src={logo} alt="Footer Logo" className="footer-logo" />
                <h3 className="fw-bold">Notic</h3>
              </div>
              <p>Get Noticed with Notic.</p>
            </div>
            
            <div className="col-md-3">
              <h5 className="fw-bold">Product</h5>
              <ul className="list-unstyled">
                <li><a href="#overview">Overview</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#releases">Releases</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Company</h5>
              <ul className="list-unstyled">
                <li><a href="#about">About us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#media">Media kit</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Resources</h5>
              <ul className="list-unstyled">
                <li><a href="#blog">Blog</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#help">Help centre</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom text-center mt-3">
            <div className="social-icons">
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#github"><i className="fab fa-github"></i></a>
              <a href="#angellist"><i className="fab fa-angellist"></i></a>
              <a href="#dribbble"><i className="fab fa-dribbble"></i></a>
            </div>
            <p>&copy; 2024 Notic. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Header;
