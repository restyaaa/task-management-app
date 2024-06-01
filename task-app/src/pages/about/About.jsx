/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import aboutImage from "../../assets/about.png"; 

const ContactUs = () => {
  return (
    <Container fluid className="about-container">
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="about-desc p-4">
          <h2 className="about-title mb-3">About Us</h2>
          <p className="about-desc-text mb-4 text-justify">Notic adalah aplikasi manajemen tugas yang memungkinkan pengguna untuk mengatur, melacak, dan menyelesaikan tugas-tugas dengan efisien. Dengan fitur seperti pengelompokan tugas, pengaturan tenggat waktu, pemberitahuan, dan kolaborasi tim, Notic membantu meningkatkan produktivitas dan membawa kejelasan dalam menyelesaikan pekerjaan. Dengan antarmuka yang intuitif dan beragam tampilan, Notic adalah teman terpercaya dalam mengelola pekerjaan sehari-hari.</p>
        </Col>
        <Col md={5} className="text-center mb-4">
          <img src={aboutImage} className="img-fluid about-img" alt="About Us" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
