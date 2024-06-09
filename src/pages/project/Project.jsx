import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommenting,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./project.css";

const Project = () => {
  const [currentProjects, setCurrentProjects] = useState([
    {
      id: 1,
      name: "Do Workout",
      tags: ["Health"],
      status: "Complete",
      dueDate: "22 May 2024",
      priority: "HIGH",
    },
    {
      id: 2,
      name: "Do Cleaning",
      tags: ["Lazy"],
      status: "On Process",
      dueDate: "22 May 2024",
      priority: "MEDIUM",
    },
    {
      id: 3,
      name: "Do Shower",
      tags: ["Lazy", "Health"],
      status: "Not Started",
      dueDate: "No Due Date",
      priority: "LOW",
    },
  ]);

  const [completedProjects, setCompletedProjects] = useState([
    {
      id: 1,
      name: "Do Workout",
      tags: ["Health"],
      status: "Finished",
      dueDate: "22 May 2024",
      priority: "HIGH",
    },
    {
      id: 2,
      name: "Do Cleaning",
      tags: ["Lazy"],
      status: "Finished",
      dueDate: "22 May 2024",
      priority: "MEDIUM",
    },
    {
      id: 3,
      name: "Do Shower",
      tags: ["Lazy", "Health"],
      status: "Finished",
      dueDate: "No Due Date",
      priority: "LOW",
    },
  ]);

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [modalTask, setModalTask] = useState(null);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"

  const handleStatusChange = (id, newStatus, projectType) => {
    if (projectType === "current") {
      setCurrentProjects((prevState) =>
        prevState.map((project) =>
          project.id === id ? { ...project, status: newStatus } : project
        )
      );
    } else {
      setCompletedProjects((prevState) =>
        prevState.map((project) =>
          project.id === id ? { ...project, status: newStatus } : project
        )
      );
    }
  };

  const handleEdit = (id, projectType) => {
    const task =
      projectType === "current"
        ? currentProjects.find((project) => project.id === id)
        : completedProjects.find((project) => project.id === id);

    setModalTask(task);
    setModalMode("edit");
    setShowTaskModal(true);
  };

  const handleDelete = (id, projectType) => {
    if (projectType === "current") {
      setCurrentProjects((prevState) =>
        prevState.filter((project) => project.id !== id)
      );
    } else {
      setCompletedProjects((prevState) =>
        prevState.filter((project) => project.id !== id)
      );
    }
  };

  const handleCheckboxChange = (id, checked) => {
    if (checked) {
      // Move project from currentProjects to completedProjects
      const projectToMove = currentProjects.find(
        (project) => project.id === id
      );
      if (projectToMove) {
        setCurrentProjects((prevState) =>
          prevState.filter((project) => project.id !== id)
        );
        setCompletedProjects((prevState) => [...prevState, projectToMove]);
      }
    } else {
      // Move project from completedProjects to currentProjects
      const projectToMove = completedProjects.find(
        (project) => project.id === id
      );
      if (projectToMove) {
        setCompletedProjects((prevState) =>
          prevState.filter((project) => project.id !== id)
        );
        setCurrentProjects((prevState) => [...prevState, projectToMove]);
      }
    }
  };
  const handleSaveTask = () => {
    if (modalMode === "add") {
      // Add new task logic
    } else if (modalMode === "edit") {
      // Edit task logic
    }

    setShowTaskModal(false);
  };

  const handleCommentClick = (id, projectType) => {
    const task =
      projectType === "current"
        ? currentProjects.find((project) => project.id === id)
        : completedProjects.find((project) => project.id === id);

    setModalTask(task);
    setShowDescriptionModal(true);
  };
  return (
    <div className="container mt-5">
      <h2>Home Project</h2>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by everything data"
        />
        <div>
          <DropdownButton
            as={ButtonGroup}
            id="sort-dropdown"
            title="Sort"
            variant="light"
            className="me-2"
          >
            <Dropdown.Item>Date</Dropdown.Item>
            <Dropdown.Item>Priority</Dropdown.Item>
            <Dropdown.Item>Status</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            as={ButtonGroup}
            id="filter-dropdown"
            title="Filter"
            variant="light"
            className="me-2"
          >
            <Dropdown.Item>Priority: Low</Dropdown.Item>
            <Dropdown.Item>Priority: Medium</Dropdown.Item>
            <Dropdown.Item>Priority: High</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Status: Not Started</Dropdown.Item>
            <Dropdown.Item>Status: On Process</Dropdown.Item>
            <Dropdown.Item>Status: Complete</Dropdown.Item>
            <Dropdown.Item>Status: Finished</Dropdown.Item>
          </DropdownButton>
          <button
            className="btn btn-new-task"
            onClick={() => {
              setShowTaskModal(true);
              setModalMode("add");
              setModalTask(null);
            }}
          >
            + Add New Task
          </button>
        </div>
      </div>

      <ProjectTable
        title="Current Project"
        projects={currentProjects}
        handleStatusChange={handleStatusChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleCommentClick={handleCommentClick}
        projectType="current"
      />

      <ProjectTable
        title="Completed Project"
        projects={completedProjects}
        handleStatusChange={handleStatusChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleCommentClick={handleCommentClick}
        projectType="completed"
      />

      <Modal show={showTaskModal} onHide={() => setShowTaskModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === "add" ? "Add New Task" : "Edit Task"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={modalTask ? modalTask.name : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={modalTask ? modalTask.description : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                defaultValue={modalTask ? modalTask.tags.join(", ") : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={modalTask ? modalTask.dueDate : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Check
                type="radio"
                label="Low"
                name="priority"
                value="LOW"
                defaultChecked={
                  modalTask ? modalTask.priority === "LOW" : false
                }
              />
              <Form.Check
                type="radio"
                label="Medium"
                name="priority"
                value="MEDIUM"
                defaultChecked={
                  modalTask ? modalTask.priority === "MEDIUM" : false
                }
              />
              <Form.Check
                type="radio"
                label="High"
                name="priority"
                value="HIGH"
                defaultChecked={
                  modalTask ? modalTask.priority === "HIGH" : false
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTaskModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Description Modal */}
      <Modal
        show={showDescriptionModal}
        onHide={() => setShowDescriptionModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Task Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalTask ? modalTask.description : ""}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDescriptionModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const ProjectTable = ({
  title,
  projects,
  handleStatusChange,
  handleEdit,
  handleDelete,
  handleCheckboxChange,
  handleCommentClick,
  projectType,
}) => {
  return (
    <div className="mb-4">
      <h5>
        {title} ({projects.length})
      </h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="select-column"></th>
            <th scope="col">Task Name</th>
            <th scope="col" className="text-center">
              Tags
            </th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col" className="text-center">
              Priority
            </th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="align-middle text-center select-column d-flex justify-content-center">
                <input
                  className="form-check-input ml-1 mt-2"
                  type="checkbox"
                  checked={projectType === "completed"}
                  onChange={(e) =>
                    handleCheckboxChange(project.id, e.target.checked)
                  }
                />
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <label
                    className="form-check-label me-2"
                    htmlFor={`flexCheck${project.id}`}
                  >
                    {project.name}
                  </label>
                  <FontAwesomeIcon
                    icon={faCommenting}
                    className="ms-auto"
                    onClick={() => handleCommentClick(project.id, projectType)}
                  />
                </div>
              </td>
              <td className="text-center align-middle">
                {project.tags.map((tag) => (
                  <span key={tag} className={`badge ${getTagClass(tag)} me-1`}>
                    {tag}
                  </span>
                ))}
              </td>
              <td className="align-middle">
                <select
                  className={`form-select ${getStatusClass(project.status)}`}
                  value={project.status}
                  onChange={(e) =>
                    handleStatusChange(project.id, e.target.value, projectType)
                  }
                >
                  <option value="Not Started">Not Started</option>
                  <option value="On Process">On Process</option>
                  <option value="Complete">Complete</option>
                  <option value="Finished">Finished</option>
                </select>
              </td>
              <td className="align-middle">{project.dueDate}</td>
              <td className="text-center align-middle">
                <span className={`badge ${getPriorityClass(project.priority)}`}>
                  {project.priority}
                </span>
              </td>
              <td className="align-middle text-center">
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(project.id, projectType)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(project.id, projectType)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getTagClass = (tag) => {
  switch (tag) {
    case "Health":
      return "bg-warning text-dark";
    case "Lazy":
      return "bg-info text-dark";
    default:
      return "bg-secondary text-light";
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case "Not Started":
      return "bg-secondary text-light";
    case "On Process":
      return "bg-warning text-dark";
    case "Complete":
      return "bg-success text-light";
    case "Finished":
      return "bg-primary text-light";
    default:
      return "";
  }
};

const getPriorityClass = (priority) => {
  switch (priority) {
    case "LOW":
      return "bg-success text-light";
    case "MEDIUM":
      return "bg-warning text-dark";
    case "HIGH":
      return "bg-danger text-light";
    default:
      return "";
  }
};

export default Project;
