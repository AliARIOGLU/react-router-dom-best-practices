/* eslint-disable */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { authenticated, user } = useAuth();
  const location = useLocation();

  console.log(user);

  return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    children
  ) : user ? (
    <Navigate
      to="/unauthorized"
      state={{ returnUrl: location.pathname }}
      replace
    />
  ) : (
    <Navigate
      to="/auth/login"
      state={{ returnUrl: location.pathname }}
      replace
    />
  );
};

export default PrivateRoute;
