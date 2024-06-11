/* eslint-disable react/prop-types */
import { AddIcon, MenuIcon } from "../../assets/Icons";
import useAddData from "./useAddData";

const AddData = ({ setForm, editData, setEditData }) => {
  const {
    handleFileChange,
    handleOnChange,
    handleUpload,
    fileInputRef,
    errors,
    handleEditData,
    addDataForm,
    setAddDataForm,
  } = useAddData(setForm, setEditData);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="backdrop-blur-sm bg-white bg-opacity-90 p-4 rounded-xl shadow-lg w-fit max-w-sm border-gray-400 border-solid border-2">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          {editData ? "Update" : "Add"} Data
        </h1>
        <button
          className="fixed rounded-full bg-white p-3"
          onClick={() => {
            setAddDataForm({
              "First Name": "",
              "Last Name": "",
              "Job Title": "",
              Company: "",
              Email: "",
              "Company Phone": "",
              Industry: "",
              City: "",
              Country: "",
              Status: "",
            });
            setForm(false);
          }}
          style={{ top: "10px", right: "10px" }}
        >
          <MenuIcon />
        </button>
        <form className="flex w-full justify-center items-center mx-auto flex-wrap">
          <div className="flex w-full mb-2 space-x-4">
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="First Name"
              >
                First Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="First Name"
                type="text"
                value={addDataForm["First Name"]}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Last Name"
              >
                Last Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Last Name"
                type="text"
                value={addDataForm["Last Name"]}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex w-full mb-2 space-x-4">
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Job Title"
              >
                Job Title
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Job Title"
                type="text"
                value={addDataForm["Job Title"]}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Company"
              >
                Company
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Company"
                type="text"
                value={addDataForm.Company}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex w-full mb-2 space-x-4">
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Email"
                type="text"
                value={addDataForm.Email}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Company Phone"
              >
                Company Number
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Company Phone"
                type="text"
                value={addDataForm["Company Phone"]}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex w-full mb-2 space-x-4">
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Industry"
              >
                Industry
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Industry"
                type="text"
                value={addDataForm.Industry}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="City"
              >
                City
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="City"
                type="text"
                value={addDataForm.City}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex w-full mb-2 space-x-4">
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Country"
              >
                Country
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Country"
                type="text"
                value={addDataForm.Country}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex-1">
              <label
                className=" text-gray-500 font-bold flex flex-start mb-1 md:mb-0 pr-4"
                htmlFor="Status"
              >
                Status
              </label>
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#007bff]"
                id="Status"
                value={addDataForm.Status}
                onChange={handleOnChange}
              >
                <option value="" disabled>
                  Select Status...
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
              type="button"
              onClick={() => (editData ? handleEditData() : handleUpload())}
            >
              {editData ? "Edit" : "Add"} Data
            </button>
            {!editData && (
              <>
                <span> or </span>
                <div className="file flex items-center justify-center">
                  <label className="flex items-center justify-center py-3 cursor-pointer rounded-md">
                    <div className="flex flex-col items-center">
                      <a
                        className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold p-2 rounded m-1 transition-all ease-in-out duration-300"
                        type="button"
                      >
                        <div className="flex items-center">
                          <AddIcon /> <div className="pl-1">Import CSV</div>
                        </div>
                      </a>
                    </div>
                    <input
                      className="m-1 hidden"
                      type="file"
                      accept=".csv"
                      onChange={(e) => handleFileChange(e)}
                      ref={fileInputRef}
                    />
                  </label>
                </div>
              </>
            )}
          </div>
          {errors.file && (
            <div className="text-red-500 text-sm mt-2">{errors.file}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddData;
