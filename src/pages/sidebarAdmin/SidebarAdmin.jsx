import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./sidebarAdmin.css";
import profilePicture from "../../assets/restya.jpeg";
import logo from "../../assets/letter-n.png";
import { ThemeContext } from "../../context/ThemeContext";

const SidebarAdmin = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

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
              to="/dashboardadmin"
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
              to="/userlist"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem
                icon="user"
                style={{ color: darkMode ? "white" : "black" }}
              >
                User List
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/settinganadmin"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem
                icon="cog"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Settings
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

export default SidebarAdmin;
