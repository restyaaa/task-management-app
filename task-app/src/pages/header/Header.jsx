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
  //save into local storage
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
        <div className="footer-container">
          <div className="footer-section">
            <h4 className="fw-bolder">Tentang Kami</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#help">Bantuan</a></li>
              <li><a href="#social">Sosial Media</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="fw-bolder">Hubungi Kami</h4>
            <ul>
              <li><a href="#privacy">Kebijakan Privasi</a></li>
              <li><a href="#security">Keamanan & Privasi</a></li>
              <li><a href="#terms">Syarat dan Ketentuan</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="fw-bolder">Alamat</h4>
            <address>
              Kota Bandung, Jawa Barat, Indonesia
            </address>
            <p>&copy; 2024 Hotgens Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
