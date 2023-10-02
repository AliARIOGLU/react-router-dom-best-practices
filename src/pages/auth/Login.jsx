import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const { setUser, authenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setUser({
      id: 1,
      name: "codex",
    });

    navigate(location?.state?.returnUrl || "/");
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [navigate, authenticated]);

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {authenticated ? null : (
        <>
          <h2>Login</h2>
          <button onClick={handleLogin}>Giris yap</button>
        </>
      )}
    </div>
  );
};

export default Login;
