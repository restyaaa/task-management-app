import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Sesuaikan path jika diperlukan
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './dashboardUser.css'; // Import CSS kustom

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardUser = () => {
  const { user } = useContext(AuthContext); // Dapatkan data pengguna dari AuthContext

  const data = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Tasks Done',
        data: [20, 30, 45, 60, 40, 55, 70, 60, 80], // Ganti dengan data sesungguhnya
        fill: false,
        borderColor: '#6c63ff',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Tasks Done Over Time',
      },
    },
  };

  return (
    <Container fluid className={`component-container p-3 ${user ? 'light-mode' : 'dark-mode'}`}>
      {user ? (
        <>
          <Row className="mb-3">
            <Col>
              <h4 className="fw-bold">Dashboard</h4>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Card className="card-hover">
                <Card.Body className="card-body-custom">
                  <img src="public/Document.svg" alt="task" className="card-img" />
                  <div className="card-content">
                    <Card.Title className="fw-bold">Tasks</Card.Title>
                    <Card.Text className="card-text-custom">
                      <h1>125</h1>
                      <p>Task</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-hover">
                <Card.Body className="card-body-custom">
                  <img src="public/Hotspot.svg" alt="current-project" className="card-img" />
                  <div className="card-content">
                    <Card.Title className="fw-bold">Current Project</Card.Title>
                    <Card.Text className="card-text-custom">
                      <h1>1 / 3</h1>
                      <p>You completed over 33% projects</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Card className="card-hover">
                <Card.Body>
                  <Card.Title className="fw-bold">Tasks Done</Card.Title>
                  <Line data={data} options={options} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-hover">
                <Card.Body>
                  <Card.Title>Summary</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Not Started: <span className="status-not-started">1</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      On Process: <span className="status-on-process">1</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Complete: <span className="status-complete">1</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Finished: <span className="status-finished">3</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Tags:</strong> Lazy, Health
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </Container>
  );
};

export default DashboardUser;
