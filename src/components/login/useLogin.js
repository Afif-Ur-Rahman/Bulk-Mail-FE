import { useAllContexts } from "../../context";
import { useNavigate, Link } from "react-router-dom";
import { LoginUserService } from "../../services";

function useLogin() {
  const { loginForm, setLoginForm, errors, setErrors, setUser, setIsAuthenticated } = useAllContexts();
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

  const handleLogin = async () => {
    await LoginUserService(loginForm, setErrors, setUser, navigate, base_url, setIsAuthenticated);
  };

  return {
    Link,
    handleOnChange,
    handleLogin,
    errors,
    setErrors,
    loginForm,
    setLoginForm,
  };
}

export default useLogin;
