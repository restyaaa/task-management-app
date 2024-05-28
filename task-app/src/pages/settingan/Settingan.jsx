import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";
import Sidebar from "../../pages/sidebar/Sidebar";
import "./settingan.css"

const Settingan = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session: ", error);
        navigate("/DashboardUser");
        return;
      }

      if (session) {
        setUser(session.user);
      } else {
        navigate("/");
      }
    };

    checkSession();
  }, [navigate]);

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/");
    } else {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar userEmail={user?.email} signOutUser={signOutUser} />
      <div className="setting mt-4 fw-bold">INI SETTINGAN</div>
    </div>
  );
};

export default Settingan;
