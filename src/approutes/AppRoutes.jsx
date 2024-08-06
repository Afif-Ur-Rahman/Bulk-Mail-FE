/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { Signup, Login } from "../components";
import Home from "../pages/Home/Home";
import EmailTemplate from "../pages/Email/EmailTemplate";
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/emailtemplates" element={<EmailTemplate />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
