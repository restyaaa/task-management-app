import React, { useState, useEffect } from "react";
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

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  console.log("Data pengguna di App.jsx:", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Header user={user} onLogout={handleLogout} />}
        >
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/dashboarduser"
          element={
            user ? (
              <>
                <Sidebar user={user} />{" "}
                {/* Meneruskan properti user ke Sidebar */}
                <DashboardUser />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/settingan"
          element={user ? <Settingan /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
