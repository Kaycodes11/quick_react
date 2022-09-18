import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  //get item from localstorage
  let user: any = JSON.parse(localStorage.getItem("user")!) || null;
  return user ? { auth: true, role: user.role } : { auth: false, role: null };
};

//protected Route state
type ProtectedRouteType = { roleRequired?: "ADMIN" | "USER" };

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { auth, role } = useAuth();

  //if the role required is there or not
  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
