import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const authToken = localStorage.getItem("token");
  return authToken ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
