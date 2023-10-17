/* eslint-disable */

import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";

const Login = () => {
  const { setUser, authenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // const handleLogin = () => {
  //   setUser({
  //     id: 1,
  //     name: "codex",
  //   });

  //   navigate(location?.state?.returnUrl || "/");
  // };

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [navigate, authenticated]);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setUser({ ...values, id: Math.floor(Math.random() * 9) });

      navigate(location?.state?.returnUrl || "/");
    },
  });

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {authenticated ? null : (
        <>
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              value={values.username}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
