/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Signup, Login, PassChange } from "../components";
import Home from "../pages/Home/Home";

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
      } else {
        navigate("/home")
      }
    }, []);
    return (
      <>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          {isToken && <Route path="/home" element={<Home />} />}
          {isToken && <Route path="/passchange" element={<PassChange />} />}
        </Routes>
      </>
    );
  };

  export default AppRoutes;