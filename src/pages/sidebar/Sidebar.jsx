import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import profilePicture from "../../assets/restya.jpeg";
import logo from "../../assets/letter-n.png";
import { ThemeContext } from "../../context/ThemeContext";
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const [openProjects, setOpenProjects] = useState(true); // Initially open
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate("/add-project");
  };

  return (
    <div
      className={`sidebar-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <CDBSidebar
        textColor={darkMode ? "#ffffff" : "#000000"}
        backgroundColor={darkMode ? "#333333" : "white"}
        className="sidebar"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: darkMode ? "white" : "black" }}
            >
              Notic
            </a>
          </div>
          <div className="profile-info">
            <img
              src={profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-details">
              <p className="username">{user && user.username}</p>
              <p className="email">{user && user.email}</p>
            </div>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              to="/dashboarduser"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem
                icon="columns"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/settingan"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem
                icon="cog"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Settings
              </CDBSidebarMenuItem>
            </NavLink>
            <div>
              <div
                onClick={() => setOpenProjects(!openProjects)}
                aria-controls="example-collapse-text"
                aria-expanded={openProjects}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CDBSidebarMenuItem
                  icon="folder-open"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Project
                </CDBSidebarMenuItem>
                <FontAwesomeIcon
                  icon={openProjects ? faChevronDown : faChevronRight}
                  style={{ marginLeft: "auto", marginRight: "15px" }}
                />
              </div>
              <Collapse in={openProjects}>
                <div className="collapse-scroll">
                  <NavLink to="/home" className="dropdown-item">
                    <CDBSidebarMenuItem
                      icon="home"
                      style={{
                        paddingLeft: "30px",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      Home
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/school" className="dropdown-item">
                    <CDBSidebarMenuItem
                      icon="school"
                      style={{
                        paddingLeft: "30px",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      School
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/work" className="dropdown-item">
                    <CDBSidebarMenuItem
                      icon="briefcase"
                      style={{
                        paddingLeft: "30px",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      Work
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/work" className="dropdown-item">
                    <CDBSidebarMenuItem
                      icon="briefcase"
                      style={{
                        paddingLeft: "30px",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      Work
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/work" className="dropdown-item">
                    <CDBSidebarMenuItem
                      icon="briefcase"
                      style={{
                        paddingLeft: "30px",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      Work
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <div
                    onClick={handleAddProject}
                    className="text-decoration-none dropdown-item"
                    style={{
                      paddingLeft: "40px",
                      cursor: "pointer",
                      color: "#0d6efd",
                    }}
                  ></div>
                </div>
              </Collapse>
              <hr />
            </div>
            <NavLink>
              <CDBSidebarMenuItem
              className="add-new-project"
              icon="plus-square"
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              Add new project
            </CDBSidebarMenuItem>
            </NavLink>
            
            <div
              style={{
                color: "red",
                position: "absolute",
                bottom: "10px",
                width: "100%",
              }}
            >
              <CDBSidebarMenuItem onClick={logout} icon="sign-out-alt">
                Logout
              </CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
