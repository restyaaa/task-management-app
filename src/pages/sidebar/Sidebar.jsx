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
import "./sidebar.css";
import profilePicture from "../../assets/restya.jpeg"; // import gambar profil
import logo from "../../assets/letter-n.png";

const Sidebar = ({ user }) => {
  console.log("Data pengguna di Sidebar.jsx:", user);
  const { logout } = useContext(AuthContext);
  // Periksa apakah user ada dan email ada di dalamnya
  if (user && user.email) {
    console.log("Email pengguna:", user.email);
  } else {
    console.log("Data pengguna atau email tidak tersedia");
  }

  return (
    <div
      className="sidebar-container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar
        textColor="#000000"
        backgroundColor="white"
        className="sidebar"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "black" }}
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
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/settingan"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon="table">Settings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon="user">Project</CDBSidebarMenuItem>
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
