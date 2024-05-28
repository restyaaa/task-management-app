import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import profilePicture from "../../assets/restya.jpeg"; // import gambar profil
import logo from "../../assets/letter-n.png";

const Sidebar = ({ userEmail, signOutUser }) => {
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
            <a href="/" className="text-decoration-none" style={{ color: "black" }}>
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
              <p className="username">Username</p>
              <p className="email">{userEmail}</p>
            </div>
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              to="/DashboardUser"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/Settingan"
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
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            {userEmail && (
              <>
                <button onClick={signOutUser} className="btn-logout">Logout</button>
              </>
            )}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
