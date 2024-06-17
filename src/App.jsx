import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import DashboardUser from "./pages/dahsboardUser/DashboardUser";
import Sidebar from "./pages/sidebar/Sidebar";
import Settingan from "./pages/settingan/Settingan";
import DashboardAdmin from "./pages/dashboardAdmin/DashboardAdmin"; // Import komponen baru
import SidebarAdmin from "./pages/sidebarAdmin/SidebarAdmin"; // Import komponen baru
import UserList from "./pages/userList/UserList";
import SettinganAdmin from "./pages/settinganAdmin/SettinganAdmin";
import Project from "./pages/project/Project";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderWrapper />}>
              <Route index element={<Home />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
            </Route>
            <Route path="login" element={<LoginWrapper />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboarduser"
              element={<ProtectedRoute component={DashboardUser} />}
            />
            <Route
              path="/settingan"
              element={<ProtectedRoute component={Settingan} />}
            />
            <Route
              path="/project"
              element={<ProtectedRoute component={Project} />}
            />
            <Route
              path="/dashboardadmin"
              element={<ProtectedRouteAdmin component={DashboardAdmin} />}
            />
            <Route
              path="/userlist"
              element={<ProtectedRouteAdmin component={UserList} />}
            />
            <Route
              path="/settinganadmin"
              element={<ProtectedRouteAdmin component={SettinganAdmin} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

// Wrapper component for Header to use AuthContext
const HeaderWrapper = () => {
  const { user, logout } = React.useContext(AuthContext);
  return <Header user={user} onLogout={logout} />;
};

// Wrapper component for Login to use AuthContext
const LoginWrapper = () => {
  const { login } = React.useContext(AuthContext);
  return <Login onLogin={login} />;
};

// Component to protect routes
const ProtectedRoute = ({ component: Component }) => {
  const { user } = React.useContext(AuthContext);
  return user ? (
    <div className="protected-route-container">
      <Sidebar user={user} />
      <Component user={user} />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

const ProtectedRouteAdmin = ({ component: Component }) => {
  const { user } = React.useContext(AuthContext);
  return user ? (
    <div className="protected-route-container">
      <SidebarAdmin user={user} />
      <Component user={user} />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
