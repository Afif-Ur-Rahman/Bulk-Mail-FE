import { useAllContexts } from "../../context";
import { useNavigate, Link } from "react-router-dom";
import { validateLoginData } from "../Validation";

function useLogin() {
  const { loginForm, setLoginForm, errors, setErrors } = useAllContexts();
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;

  const handleOnChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setLoginForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const userLogin = async () => {
    const validData = validateLoginData(loginForm, setErrors);
    if (!validData) {
      return;
    }

    try {
      const payload = loginForm;
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
      setLoginForm({ email: "", password: "" });
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
    setErrors,
    loginForm,
    setLoginForm,
  };
}

export default useLogin;
