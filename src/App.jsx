/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./approutes/AppRoutes";

import { Header } from "./components";
import { AllContextsProvider } from "./context";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ _id: "", name: "", email: "", image: "" });
  const [data, setData] = useState([]);
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [addDataForm, setAddDataForm] = useState({
    "First Name": "",
    "Last Name": "",
    "Job Title": "",
    Company: "",
    Email: "",
    "Company Phone": "",
    Industry: "",
    City: "",
    Country: "",
    Status: "",
  });
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    file: "",
  });
  return (
    <BrowserRouter>
      <AllContextsProvider
        value={{
          user,
          setUser,
          data,
          setData,
          signupForm,
          setSignupForm,
          errors,
          setErrors,
          loginForm,
          setLoginForm,
          addDataForm,
          setAddDataForm,
          pages,
          setPages,
        }}
      >
        <Header />
        <AppRoutes />
      </AllContextsProvider>
    </BrowserRouter>
  );
};

export default App;
