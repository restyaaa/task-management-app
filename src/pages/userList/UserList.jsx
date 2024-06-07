import React, { Component } from "react";
import { Table, Container, Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./userList.css"

class UserList extends Component {
  state = {
    users: [],
    error: null,
    showModal: false,
    userToDelete: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/users", {
        headers: {
          Authorization: token,
        },
      });

      this.setState({ users: response.data });
    } catch (error) {
      this.setState({
        error: error.response?.data?.error || "Failed to fetch users",
      });
    }
  };

  handleShowModal = (user) => {
    this.setState({ showModal: true, userToDelete: user });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, userToDelete: null });
  };

  handleConfirmDelete = async () => {
    const { userToDelete } = this.state;
    if (userToDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `http://localhost:5000/users/${userToDelete.username}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        this.setState({
          users: this.state.users.filter(
            (user) => user.username !== userToDelete.username
          ),
          showModal: false,
          userToDelete: null,
        });
      } catch (error) {
        this.setState({
          error: error.response?.data?.error || "Failed to delete user",
        });
      }
    }
  };

  render() {
    const { users, error, showModal, userToDelete } = this.state;

    return (
      <Container>
        <h2 className="my-4 mt-5">User List</h2>
        {error && <p className="text-danger">{error}</p>}
        <Table striped bordered hover >
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th>Username</th>
              <th>Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.username}>
                <td className="text-center">{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    onClick={() => this.handleShowModal(user)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete user "{userToDelete?.username}"?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default UserList;
