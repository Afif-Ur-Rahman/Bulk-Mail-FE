/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateSignupData } from "./Validation";

const Signup = () => {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
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

  const userSignup = async () => {
    const validData = validateSignupData(formData, setErrors);
    if (!validData) {
      return;
    }

    try {
      const payload = formData;

      console.log("payload = ", payload);

      const response = await fetch(`${base_url}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!result.ok) {
        return setErrors((prevErrors) => ({
          ...prevErrors,
          email: result.data,
        }));
      }

      setFormData({ name: "", email: "", password: "" });
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="backdrop-blur-sm bg-white bg-opacity-90 p-4 rounded-xl shadow-lg w-fit max-w-sm border-gray-400 border-solid border-2">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          Sign Up
        </h1>
        <form className="flex flex-col w-full justify-center items-center mx-auto">
          <div className="flex justify-center items-start flex-col mb-2">
            <div>
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                type="text"
                value={formData.name}
                placeholder="Enter Name..."
                onChange={handleOnChange}
              />
              {errors.name && (
                <div className="text-red-500 text-xs italic mt-2">
                  {errors.name}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-start flex-col mb-2">
            <div>
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                type="text"
                value={formData.email}
                placeholder="Enter Email..."
                onChange={handleOnChange}
              />
              {errors.email && (
                <div className="text-red-500 text-xs italic mt-2">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-start flex-col mb-2">
            <div>
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password"
              >
                Password:
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="password"
                type="password"
                value={formData.password}
                placeholder="Enter Password..."
                onChange={handleOnChange}
              />
              {errors.password && (
                <div className="text-red-500 text-xs italic mt-2">
                  {errors.password}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center flex-col">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-1"
              type="button"
              onClick={userSignup}
            >
              Sign Up
            </button>
            <div>
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/" className="underline text-blue-700">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
