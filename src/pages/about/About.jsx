/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";
import aboutImage from "../../assets/about.png";
import restya from "../../assets/restya.jpeg"
import yoga from "../../assets/yoga.jpeg"
import dino from "../../assets/dino.jpg"


const ContactUs = () => {
  const teamMembers = [
    { name: "Bagas Restya E.", role: "Lead Developer", image: restya },
    { name: "Maulana Arya Yoga", role: "Front-End Developer", image: yoga },
    { name: "Aldino Marsel P.", role: "Front-End Developer", image: dino },
    { name: "Mohammad Fauzi H.", role: "Back-End Developer", image: yoga },
    { name: "Ahmad Rizal B.", role: "Back-End Developer", image: yoga },
    
  ];

  return (
    <Container fluid className="about-container pt-4">
      <h4 className="about-title-about mt-2">About Us</h4>
      <Row className="justify-content-center mt-0">
        <Col md={5} className="about-desc p-4">
          <p className="about-desc-text mb-4 text-justify">
            <b>Notic</b> adalah aplikasi manajemen tugas yang memungkinkan
            pengguna untuk mengatur, melacak, dan menyelesaikan tugas-tugas
            dengan efisien. Dengan fitur seperti pengelompokan tugas, pengaturan
            tenggat waktu, pemberitahuan cerdas, dan kolaborasi tim, Notic
            membantu meningkatkan produktivitas dan memberikan kejelasan dalam
            menyelesaikan pekerjaan.
          </p>
          <p className="about-desc-text mb-4 text-justify">
            Kami menyediakan antarmuka yang intuitif dan berbagai tampilan yang
            dapat disesuaikan, menjadikan Notic sebagai teman terpercaya dalam
            mengelola pekerjaan sehari-hari. Dapat diakses melalui desktop,
            tablet, dan smartphone, Notic memastikan Anda dapat mengelola tugas
            di mana saja dan kapan saja.
          </p>
          <p className="about-desc-text mb-4 text-justify">
            Notic dirancang untuk mendukung Anda tetap terorganisir, produktif,
            dan selalu selangkah lebih maju dalam menyelesaikan setiap tugas.
          </p>
        </Col>
        <Col md={5} className="text-center mb-4">
          <img
            src={aboutImage}
            className="img-fluid about-img"
            alt="About Us"
          />
        </Col>
      </Row>
      <h4 className="about-title mb-5">The Team</h4>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4 col-card">
            <Card className="card-team">
              <Card.Img variant="top" src={member.image} className="team-img" />
              <Card.Body className="card-body">
                <Card.Title className="card-text">{member.name}</Card.Title>
                <Card.Text className="card-text">{member.role}</Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default ContactUs;
