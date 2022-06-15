
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
  
  const {token} = useSelector((state) => state.auth);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}