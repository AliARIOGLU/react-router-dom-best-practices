/* eslint-disable */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        replace={true}
        state={{ returnUrl: location.pathname }}
      />
    );
  }

  return children;
};

export default PrivateRoute;
