/* eslint-disable react/prop-types */
import { useAllContexts } from "../context";

export function Pagination() {
  const { pages, setPages } = useAllContexts();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pages.totalPages) {
      setPages({ ...pages, page: newPage });
    }
  };

  return (
    <div className="flex items-center">
      <a
        className={`mx-1 cursor-pointer text-sm font-semibold text-gray-900 ${
          pages.page === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => handlePageChange(pages.page - 1)}
      >
        &larr; Previous
      </a>

      {pages.page - 1 !== 0 && (
        <a
          className={`shadow cursor-pointer border-2 text-[#007bff] border-[#007bff] hover:bg-[#007bff] hover:text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300 mx-1 flex items-center hover:scale-105`}
          onClick={() => handlePageChange(pages.page - 1)}
        >
          {pages.page - 1}
        </a>
      )}
      <a
        className={`shadow cursor-pointer border-2 border-[#007bff] hover:bg-[#007bff] hover:text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300 mx-1 flex items-center hover:scale-105 bg-[#007bff] text-white`}
        onClick={() => handlePageChange(pages.page)}
      >
        {pages.page}
      </a>
      {pages.page !== pages.totalPages && pages.totalPages !== 0 && (
        <a
          className={`shadow cursor-pointer border-2 text-[#007bff] border-[#007bff] hover:bg-[#007bff] hover:text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300 mx-1 flex items-center hover:scale-105`}
          onClick={() => handlePageChange(pages.page + 1)}
        >
          {pages.page + 1}
        </a>
      )}
      <a
        className={`mx-2 cursor-pointer text-sm font-semibold text-gray-900 ${
          pages.page === pages.totalPages || pages.totalPages === 0
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
        onClick={() => handlePageChange(pages.page + 1)}
      >
        Next &rarr;
      </a>
    </div>
  );
}
