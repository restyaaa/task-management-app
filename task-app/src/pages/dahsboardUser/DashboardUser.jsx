// DashboardUser.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../pages/sidebar/Sidebar";
import "./dashboardUser.css";

const DashboardUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const userData = await fetchUserData(); // Misalnya, fungsi untuk mengambil data pengguna
      setUser(userData);
    };

    checkSession();
  }, [navigate]);

  const signOutUser = async () => {
    // Logic to sign out user
  };

return (
  <div style={{ display: "flex" }}>
    <div>
      <Sidebar user={user} />
    </div>
    <div style={{ flex: 1 }}>
      {user ? (
        <div className="container fw-bold">INI DASHBOARD</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
);

};

export default DashboardUser;
