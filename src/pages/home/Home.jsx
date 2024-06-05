import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./home.css"; // Pastikan Anda menambahkan styling custom jika diperlukan
import noticImage from "../../assets/hero.png";
import wave from "../../../public/waves.svg";
import wavedown from "../../../public/waves-down.svg";
import easy from "../../assets/easy.png"
import boost from "../../assets/shuttle.png"
import access from "../../assets/anywhere.png"

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Container className="intro-section">
        <Row className="align-items-center">
          <Col md={6} className="text-container-home">
            <h1 className="title-hero fw-bold">Get Noticed With Notic</h1>
            <p className="sub-title">
              Elevate Your Productivity and Stay Ahead
            </p>
            <p className="desc-home">
              With Notic, you'll not only manage your tasks more efficiently but
              also significantly boost your productivity. This app is designed
              to help you stay organized, ensure every task is completed on
              time, and keep you ahead of the game.
            </p>
            <Form className="email-signup-form">
              <Button type="submit" className="btn-sign-up-home">
                Sign up - it's free!
              </Button>
            </Form>
          </Col>
          <Col md={6} className="image-container-home">
            <img
              src={noticImage} // Ganti dengan path gambar yang sesuai
              alt="Notic Illustration"
              className="img-fluid-home"
            />
          </Col>
        </Row>
      </Container>
      <img
        src={wave} // Ganti dengan path gambar yang sesuai
        alt="Notic Illustration"
        className="img-fluid"
      />
      <Container fluid className="why-notic-section">
        <Row className="text-center">
          <Col>
            <h2 className="fw-bold mb-xl-5 h2-home">Why Notic?</h2>
          </Col>
        </Row>
        <Row className="why-notic-topic  text-center">
          <Col md={4} className="mb-5 mt-4">
            <img
              src={easy} // Ganti dengan path gambar yang sesuai
              alt="Notic Illustration"
              className="img-fluid topic-icon"
            />
            <h4 className="fw-bolder">Seamless Task Management</h4>
            <p>
              Notic offers an intuitive and user-friendly interface that makes
              task management effortless. Easily create, organize, and
              prioritize your tasks, ensuring you never miss a deadline.
            </p>
          </Col>
          <Col md={4} className="mt-4">
            <img
              src={boost} // Ganti dengan path gambar yang sesuai
              alt="Notic Illustration"
              className="img-fluid topic-icon"
            />
            <h4 className="fw-bolder">Boosted Productivity</h4>
            <p>
              With smart reminders and progress tracking, Notic helps you stay
              focused and productive. Our advanced features are designed to
              streamline your workflow, allowing you to accomplish more in less
              time.
            </p>
          </Col>
          <Col md={4} className="mt-4">
            <img
              src={access} // Ganti dengan path gambar yang sesuai
              alt="Notic Illustration"
              className="img-fluid topic-icon"
            />
            <h4 className="fw-bolder">Anywhere, Anytime Access</h4>
            <p>
              Notic is accessible across all your devices—whether on your
              desktop, tablet, or smartphone. Stay connected and manage your
              tasks wherever you are, ensuring you can stay productive on the
              go.
            </p>
          </Col>
        </Row>
      </Container>
      <img
        src={wavedown} // Ganti dengan path gambar yang sesuai
        alt="Notic Illustration"
        className="img-fluid"
      />
    </Container>
  );
};

export default Home;
