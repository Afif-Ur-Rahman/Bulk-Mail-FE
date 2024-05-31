/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";
import "../App.css";

const Home = () => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState([]);

  const [searchCategory, setSearchCategory] = useState("Year");
  const [searchQuery, setSearchQuery] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const filteredData = data.filter((item) => {
    return item[searchCategory]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${base_url}/upload-csv`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        console.log("result = ", result);
        setData(result.data);
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      setError("Error uploading file");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getData = async () => {
    try {
      const response = await fetch(`${base_url}/getdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const firstTenEntries = result.data.slice(0, 10);
      setData(firstTenEntries);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="flex justify-between items-center m-1">
            <div></div>
            <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
              Mail Gun
            </h1>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="border rounded-lg divide-y divide-gray-200">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between search">
                <div className="flex items-center m-1">
                  <div className="relative">
                    <select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className="appearance-none py-2 px-3 border border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-white hover:border-gray-400"
                    >
                      <option value="name">Name</option>
                      <option value="email">Email</option>
                      {/* <option value="jobTitle">Job Title</option>
                      <option value="company">Company</option> */}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative max-w-xs ml-2">
                    <label htmlFor="hs-table-search" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      name="hs-table-search"
                      id="hs-table-search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="py-2 px-3 pl-9 block w-full border border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Search"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="m-1 file flex items-center justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <input
                      className="m-1"
                      type="file"
                      accept=".csv"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                    {error && (
                      <div className="text-red-500 text-sm mt-2">{error}</div>
                    )}
                  </div>
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1"
                    type="button"
                    onClick={handleUpload}
                  >
                    Add CSV File
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <DataTable data={data} filteredData={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
