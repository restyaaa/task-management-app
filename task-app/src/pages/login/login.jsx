import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";

const login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
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

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="light"
      providers={["discord", "google", "github", "facebook"]}
    />
  );
};

export default login;
