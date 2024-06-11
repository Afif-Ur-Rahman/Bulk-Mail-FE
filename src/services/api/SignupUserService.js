import { validateSignupData } from "../../components/Validation";

const SignupUserService = async (
  signupForm,
  setErrors,
  setUser,
  navigate,
  base_url
) => {
  const validData = validateSignupData(signupForm, setErrors);
  if (!validData) {
    return;
  }

  try {
    const payload = {
      ...signupForm,
      // image: selectedImage,
    };

    const response = await fetch(`${base_url}/signup`, {
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
        email: result.data,
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

export default SignupUserService;
