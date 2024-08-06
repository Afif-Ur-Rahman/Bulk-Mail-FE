import { useState } from "react";
import { MailTemplate } from "../../components";
import { useAllContexts } from "../../context";

const EmailTemplate = () => {
  const { searchData, setSearchData } = useAllContexts();
  const [mail, setMail] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div className="pt-0 px-1.5 pb-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between search">
                <div className="flex items-center m-1">
                  <div className="relative max-w-xs ml-2">
                    <label htmlFor="hs-table-search" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      name="hs-table-search"
                      id="hs-table-search"
                      value={searchData}
                      onChange={(e) => setSearchData(e.target.value)}
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

                <button
                  className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
                  type="button"
                  onClick={() => setMail(true)}
                >
                  Add Template
                </button>
                {mail && <MailTemplate setMail={setMail} />}
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Select
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailTemplate;
