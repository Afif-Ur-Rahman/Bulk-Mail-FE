import usePassChange from "./usePassChange";

function PassChange() {
  const {errors, handleOnChange, handlePassChange, formData, navigate} = usePassChange();
  

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="backdrop-blur-sm bg-white bg-opacity-90 p-4 rounded-xl shadow-lg w-fit max-w-sm border-gray-400 border-solid border-2">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          Change Password
        </h1>
        <form
          className="flex flex-col w-full justify-center items-center mx-auto"
          onSubmit={handlePassChange}
        >
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
                htmlFor="oldPassword"
              >
                Old Password:
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="oldPassword"
                type="password"
                value={formData.oldPassword}
                placeholder="Enter Old Password..."
                onChange={handleOnChange}
              />
              {errors.oldPassword && (
                <div className="text-red-500 text-xs italic mt-2">
                  {errors.oldPassword}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-start flex-col mb-2">
            <div>
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="newPassword"
              >
                New Password:
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="newPassword"
                type="password"
                value={formData.newPassword}
                placeholder="Enter New Password..."
                onChange={handleOnChange}
              />
              {errors.newPassword && (
                <div className="text-red-500 text-xs italic mt-2">
                  {errors.newPassword}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center flex-col">
            <button
              className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
              type="submit"
            >
              Change Password
            </button>
            <button className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300" 
            onClick={() => navigate("/home")} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassChange;
