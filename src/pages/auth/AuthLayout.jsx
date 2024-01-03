/* eslint-disable */

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const AuthLayout = () => {
  const { authenticated } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (authenticated) {
  //     navigate("/");
  //   }
  // }, [authenticated, navigate]);

  const content = authenticated ? (
    <>
      <h2>Auth Layout</h2>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );

  return (
    <div>
      <>{content}</>
    </div>
  );
};

export default AuthLayout;
