import { useState } from "react";
import { useNavigate } from "react-router-dom";

function usePassChange() {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleOnChange = (e) => {
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

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", oldPassword: "", newPassword: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.oldPassword) {
      newErrors.oldPassword = "Old password is required";
      valid = false;
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePassChange = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`${base_url}/changepass`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: errorData.data.email || "",
            oldPassword: errorData.data.oldPassword || "",
          }));
        } else {
          alert("Password changed successfully");
          setFormData({
            email: "",
            oldPassword: "",
            newPassword: "",
          });
          navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  return { errors, handleOnChange, handlePassChange, formData, navigate };
}

export default usePassChange;
