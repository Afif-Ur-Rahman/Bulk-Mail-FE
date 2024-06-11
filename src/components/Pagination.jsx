/* eslint-disable react/prop-types */
import { useAllContexts } from "../context";

export function Pagination() {
  const { pages, setPages } = useAllContexts();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pages.totalPages) {
      setPages({ ...pages, page: newPage });
    }
  };

  const page = [];
  for (let i = 1; i <= pages.totalPages; i++) {
    page.push(i);
  }

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
      {page.map((page) => (
        <a
          key={page}
          className={`shadow cursor-pointer border-2 border-[#007bff] hover:bg-[#007bff] hover:text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300 mx-1 flex items-center hover:scale-105 ${
            pages.page === page
              ? "bg-[#007bff] text-white"
              : "bg-transparent text-[#007bff]"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </a>
      ))}
      <a
        className={`mx-2 cursor-pointer text-sm font-semibold text-gray-900 ${
          pages.page === pages.totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => handlePageChange(pages.page + 1)}
      >
        Next &rarr;
      </a>
    </div>
  );
}
