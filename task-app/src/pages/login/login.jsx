/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";
import { Card } from "react-bootstrap";
import { FaGoogle, FaDiscord, FaArrowLeft } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/DashboardUser");
      } else if (event === "SIGNED_OUT") {
        navigate("/");
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  const handleBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="wave">
        <img src="../../assets/wavebwh.png" alt="wave" />
      </div>
      <Card className="login-card">
        <div className="back-link">
          <FaArrowLeft className="icon"/>
          <a href="/" >  Back</a>
        </div>
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: {
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              divider: {
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                margin: '20px 0',
              },
              dividerText: {
                padding: '0 10px',
              },
              dividerLine: {
                flex: '1',
                height: '1px',
                backgroundColor: '#ccc',
              }
            },
            className: {
              button: 'btn',
            }
          }}
          theme="light"
          providers={[]}
        />
        <div className="login-footer">
          <div className="divider">or</div>
          <div className="social-login-buttons">
            <button onClick={() => supabase.auth.signIn({ provider: 'google' })} className="btn btn-blue">
              <FaGoogle className="icon" /> Sign in with Google
            </button>
            <button onClick={() => supabase.auth.signIn({ provider: 'discord' })} className="btn btn-blue">
              <FaDiscord className="icon" /> Sign in with Discord
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
