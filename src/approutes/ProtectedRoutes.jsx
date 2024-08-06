import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const authToken = localStorage.getItem("token");
  return authToken ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
