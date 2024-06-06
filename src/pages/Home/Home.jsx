import DataTable from "../../components/dataTable/DataTable";
import "../../App.css";
import useHome from "./useHome";
import { Pagination } from "../../components";
import AddData from "../../components/addData/AddData";
import { AddIcon } from "../../assets/Icons";

const Home = () => {
  const {
    filteredData,
    searchQuery,
    data,
    setData,
    setSearchQuery,
    pages,
    handlePageChange,
    form,
    setForm,
  } = useHome();
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
                <div
                  className="cursor-pointer flex items-center hover:text-[#007bff] transition-all"
                  onClick={() => setForm(true)}
                >
                  <AddIcon />
                </div>
                {form && <AddData setData={setData} setForm={setForm} />}
              </div>
            </div>
            <div className="overflow-x-auto">
              <DataTable data={data} filteredData={filteredData} />
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto my-8">
            <Pagination
              totalPages={pages.totalPages}
              currentPage={pages.page}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
