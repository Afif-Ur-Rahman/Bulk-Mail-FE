import { useState } from "react";
import { MailTemplate } from "../../components";
import useEmailTemplate from "./useEmailTemplate";
import {
  ArrowRightIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
} from "../../assets/Icons";

const EmailTemplate = () => {
  const {
    filteredData,
    searchData,
    setSearchData,
    setMailForm,
    navigate,
    setTemplateId,
    token,
    DeleteMailTemplateService,
    base_url,
    setMailTemplatesData,
  } = useEmailTemplate();
  const [mail, setMail] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="pt-0 px-1.5 pb-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg">
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
                      <SearchIcon />
                    </div>
                  </div>
                </div>

                <button
                  className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
                  onClick={() => setMail(true)}
                >
                  Add Template
                </button>
                {mail && <MailTemplate setMail={setMail} />}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mb-4">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit"
                >
                  <div className="flex justify-between items-center">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.subject}
                    </h5>
                    <div className="flex justify-between items-center mr-2">
                      <div
                        className="mr-1 cursor-pointer"
                        onClick={() => {
                          setTemplateId(item._id);
                          setMailForm((prevdata) => ({
                            ...prevdata,
                            subject: item.subject,
                            message: item.message,
                          }));
                          setMail(true);
                        }}
                      >
                        <EditIcon />
                      </div>
                      <div
                        className="ml-1 cursor-pointer"
                        onClick={() =>
                          DeleteMailTemplateService(
                            item._id,
                            token,
                            base_url,
                            setMailTemplatesData
                          )
                        }
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.message}
                  </p>
                  <div className="flex justify-center items-center">
                    <button
                      className="flex justify-center items-center shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
                      onClick={() => {
                        setMailForm((prevdata) => ({
                          ...prevdata,
                          subject: item.subject,
                          message: item.message,
                        }));
                        navigate("/home");
                      }}
                    >
                      Select <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailTemplate;
