import useSignup from "./useSignup";

const Signup = () => {
  const {
    Link,
    errors,
    setErrors,
    handleOnChange,
    signupForm,
    setSignupForm,
    selectedImage,
    handleImageChange,
    handleSignup,
  } = useSignup();

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="backdrop-blur-sm bg-white bg-opacity-90 p-4 rounded-xl shadow-lg w-fit max-w-sm border-gray-400 border-solid border-2">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          Sign Up
        </h1>
        <form
          className="flex flex-col w-full justify-center items-center mx-auto"
          onSubmit={handleSignup}
        >
          <div>
            <label className="flex items-center justify-center py-3 cursor-pointer rounded-md">
              <div className="flex flex-col items-center">
                <img
                  src={selectedImage}
                  alt="Profile"
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              <input
                type="file"
                id="profile-image"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="name"
                type="text"
                value={signupForm.name}
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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="email"
                type="text"
                value={signupForm.email}
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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="password"
                type="password"
                value={signupForm.password}
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
              className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
              type="submit"
            >
              Sign Up
            </button>
            <div>
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setErrors({
                      name: "",
                      email: "",
                      password: "",
                      file: "",
                    });
                    setSignupForm({
                      name: "",
                      email: "",
                      password: "",
                    });
                  }}
                >
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
