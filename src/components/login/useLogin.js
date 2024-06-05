import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateLoginData } from "../Validation";

function useLogin() {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const userLogin = async () => {
    const validData = validateLoginData(formData, setErrors);
    if (!validData) {
      return;
    }

    try {
      const payload = formData;
      const response = await fetch(`${base_url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!result.success) {
        return setErrors((prevErrors) => ({
          ...prevErrors,
          email: result.data.email || "",
          password: result.data.password || "",
        }));
      }
      localStorage.setItem("token", result.token);
      setFormData({ email: "", password: "" });
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return {
    Link,
    handleOnChange,
    userLogin,
    errors,
    formData,
  };
}

export default useLogin;
