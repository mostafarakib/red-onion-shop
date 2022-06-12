import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, redirectTo }) => {
  const location = useLocation();
  const { user } = useAuth();

  return user.email ? (
    children
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};

export default PrivateRoute;
