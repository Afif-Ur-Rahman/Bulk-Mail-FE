import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateSignupData } from "../Validation";
import { useAllContexts } from "../../context";
import Actor from "../../assets/actor.png";

function useSignup() {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const { setUser, signupForm, setSignupForm, errors, setErrors } =
    useAllContexts();
  const [selectedImage, setSelectedImage] = useState(Actor);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setSignupForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const userSignup = async (event) => {
    event.preventDefault();

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
      setSignupForm({ name: "", email: "", password: "" });
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    Link,
    errors,
    setErrors,
    handleOnChange,
    userSignup,
    signupForm,
    setSignupForm,
    selectedImage,
    handleImageChange,
  };
}

export default useSignup;
