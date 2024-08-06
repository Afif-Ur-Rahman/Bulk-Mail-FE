import { validateLoginData } from "../../components/Validation";

const LoginUserService = async (
  loginForm,
  setErrors,
  setUser,
  navigate,
  base_url
) => {
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
    setUser({
      _id: result.data._id,
      name: result.data.name,
      email: result.data.email,
    });
    navigate("/home");
  } catch (error) {
    console.error("Error:", error);
  }
};

export default LoginUserService;
