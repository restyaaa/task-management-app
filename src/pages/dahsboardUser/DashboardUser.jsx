import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Sesuaikan path dengan lokasi file AuthContext

const DashboardUser = () => {
  const { user } = useContext(AuthContext); // Mengambil user dari konteks autentikasi

  return (
    <div className="component-container">
      {user ? (
        <div className="container fw-bold">
          <p>Welcome, {user.username}!</p>
          <p>Email: {user.email}</p>
          {/* Tambahkan informasi lain tentang user di sini */}
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default DashboardUser;
