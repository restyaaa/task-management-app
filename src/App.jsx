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
import DashboardUser from "./pages/dahsboardUser/DashboardUser";
import Sidebar from "./pages/sidebar/Sidebar";
import Settingan from "./pages/settingan/Settingan";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderWrapper />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
          <Route path="login" element={<LoginWrapper />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/dashboarduser"
            element={<ProtectedRoute component={DashboardUser} />}
          />
          <Route
            path="/settingan"
            element={<ProtectedRoute component={Settingan} />}
          />
        </Routes>
      </BrowserRouter>
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

export default App;