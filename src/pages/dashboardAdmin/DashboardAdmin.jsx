import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Sesuaikan path jika diperlukan
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'chart.js/auto';
import './dashboardAdmin.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const DashboardAdmin = () => {
  const { user } = useContext(AuthContext); // Dapatkan data pengguna dari AuthContext
  const isDarkMode = !user; // Assume dark mode when user is not defined

  const textColor = isDarkMode ? '#fff' : '#000'; // Set text color based on mode

  const lineData = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Total Users',
        data: [150, 100, 250, 300, 200, 200, 200, 200, 200],
        fill: true,
        backgroundColor: 'rgba(108, 99, 255, 0.2)',
        borderColor: '#6c63ff',
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: textColor,
        }
      },
      title: {
        display: true,
        text: 'Total Users Over Time',
      },
    },
  };

  const pieData = {
    labels: ['Active', 'Deleted', 'Pending'],
    datasets: [
      {
        label: 'Users',
        data: [356, 144, 50],
        backgroundColor: ['#6c63ff', '#ff6384', '#ffcd56'],
        hoverOffset: 3,
        borderColor: 'rgba(0, 0, 0, 0)', // No border color
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'User Status',
      },
    }
  };

  return (
    <Container fluid className={`component-container p-3 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {user ? (
        <>
          <Row className="mb-3">
            <Col>
              <h4 className="fw-bold">Dashboard Admin</h4>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Card className="card-hover">
                <Card.Body className="card-body-custom">
                  <img src="public/users.png" alt="total-users" className="card-img" />
                  <div className="card-content">
                    <Card.Title className="fw-bold">Total Users</Card.Title>
                    <Card.Text className="card-text-custom">
                      <h1 className="fw-bold">550</h1>
                      <p className="ms-2">Users</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-hover">
                <Card.Body className="card-body-custom">
                  <img src="public/key.svg" alt="registration" className="card-img" />
                  <div className="card-content">
                    <Card.Title className="fw-bold">New Registration</Card.Title>
                    <Card.Text className="card-text-custom">
                      <h1 className="fw-bold">100</h1>
                      <p className="ms-2">New registered user this month</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={8}>
              <Card className="card-hover">
                <Card.Body className="card-body-radius">
                  <Card.Title className="fw-bold">Total Users</Card.Title>
                  <Line data={lineData} options={lineOptions} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-hover">
                <Card.Body className="card-body-radius">
                  <Card.Title className="fw-bold">User Status</Card.Title>
                  <Pie data={pieData} options={pieOptions} />
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

export default DashboardAdmin;
