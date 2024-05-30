
export const validateSignupData = (formData, setErrors) => {
    const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    const { name, email, password } = formData;
    let valid = true;

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      valid = false;
    }

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      valid = false;
    } else if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address",
      }));
      valid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      valid = false;
    }

    return valid;
};

export const validateLoginData = (formData, setErrors) => {
    const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    const { email, password } = formData;
    let valid = true;

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      valid = false;
    } else if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address",
      }));
      valid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      valid = false;
    }

    return valid;
};
