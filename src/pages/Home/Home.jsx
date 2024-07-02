import DataTable from "../../components/dataTable/DataTable";
import "../../App.css";
import useHome from "./useHome";
import { Pagination, ShowData } from "../../components";
import AddData from "../../components/addData/AddData";
import { AddIcon, SearchIcon } from "../../assets/Icons";

const Home = () => {
  const { filteredData, form, setForm, searchData, setSearchData, userInfo } =
    useHome();
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
                      <SearchIcon />
                    </div>
                  </div>
                </div>
                <div
                  className="cursor-pointer flex items-center hover:text-[#007bff] transition-all"
                  onClick={() => setForm(true)}
                >
                  <AddIcon />
                </div>
                {form && <AddData />}
                {userInfo && <ShowData />}
              </div>
            </div>
            <div className="overflow-x-auto">
              <DataTable filteredData={filteredData} />
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto my-8">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
