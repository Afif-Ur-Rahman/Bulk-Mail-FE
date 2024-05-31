/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Signup, Login, Home } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isToken, setIsToken] = useState(!!token);

  useEffect(() => {
    setIsToken(!!token === true ? true : false);
  }, [token]);

  useEffect(() => {
    if (!isToken) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        {isToken && <Route path="/home" element={<Home />} />}
      </Routes>
    </>
  );
}

export default App;
