/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup, Login } from "../components";
import Home from "../pages/Home/Home";
import EmailTemplate from "../pages/Email/EmailTemplate";
import ProtectedRoute from "./ProtectedRoutes";
import { useAllContexts } from "../context";

const AppRoutes = () => {
  const { token, setIsAuthenticated, isAuthenticated } = useAllContexts();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token, setIsAuthenticated]);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute Component={Home} isAuthenticated={isAuthenticated} />
        }
      />
      <Route
        path="/emailtemplates"
        element={
          <ProtectedRoute
            Component={EmailTemplate}
            isAuthenticated={isAuthenticated}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
