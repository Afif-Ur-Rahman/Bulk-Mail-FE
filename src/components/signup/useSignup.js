import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAllContexts } from "../../context";
import Actor from "../../assets/actor.png";
import { SignupUserService } from "../../services";

function useSignup() {
  const { signupForm, setSignupForm, errors, setErrors, setUser } =
    useAllContexts();
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;
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

  const handleSignup = async (event) => {
    event.preventDefault();
    await SignupUserService(signupForm, setErrors, setUser, navigate, base_url);
  };

  return {
    Link,
    errors,
    setErrors,
    handleOnChange,
    signupForm,
    setSignupForm,
    selectedImage,
    handleImageChange,
    handleSignup,
  };
}

export default useSignup;
