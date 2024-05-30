import { useState } from "react";
import DataTable from "./DataTable";
import "../App.css"

const Home = () => {
  const [data, setData] = useState([
    {
      name: "Afif Ur Rahman",
      email: "afifurrahman@gmail.com",
      jobTitle: "Backend Developer",
      company: "HasbiSoft",
    },
    {
      name: "Muhammad Ibtisam",
      email: "ibtisam@gmail.com",
      jobTitle: "Mobile App Developer",
      company: "HasbiSoft",
    },
    {
      name: "Abdul Razzaq",
      email: "razzaq@gmail.com",
      jobTitle: "Mobile App Developer",
      company: "HasbiSoft",
    },
    {
      name: "Rana Abubakar",
      email: "abubakar@gmail.com",
      jobTitle: "Frontend Developer",
      company: "HasbiSoft",
    },
    {
      name: "Rana Talha",
      email: "talha@gmail.com",
      jobTitle: "Fullstack Developer",
      company: "HasbiSoft",
    },
  ]);

  const [checkedItems, setCheckedItems] = useState(new Array(data.length).fill(false));
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setCheckedItems(new Array(data.length).fill(isChecked));
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = checkedItems.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedItems(updatedCheckedItems);
  };

  const filteredData = data.filter((item) => {
    return item[searchCategory].toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="p-1.5 min-w-full inline-block align-middle">
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
                      <option value="jobTitle">Job Title</option>
                      <option value="company">Company</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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
                <div className="m-1">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-1"
                    type="button"
                    // onClick={""}
                  >
                    Add CSV File
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <DataTable handleSelectAll={handleSelectAll} checkedItems={checkedItems} filteredData={filteredData} handleCheckboxChange={handleCheckboxChange}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
