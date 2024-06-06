/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useHome = () => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });
  const [form, setForm] = useState(false);

  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item?.["First Name"]?.toLowerCase().includes(query) ||
      item?.["Last Name"]?.toLowerCase().includes(query) ||
      item?.Title?.toLowerCase().includes(query) ||
      item?.Company?.toLowerCase().includes(query) ||
      item?.Email?.toLowerCase().includes(query) ||
      item?.["Company Phone"]?.toLowerCase().includes(query) ||
      item?.Industry?.toLowerCase().includes(query) ||
      item?.City?.toLowerCase().includes(query) ||
      item?.Country?.toLowerCase().includes(query)
    );
  });

  const getData = async () => {
    try {
      const response = await fetch(`${base_url}/getdata?page=${pages.page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (result.success) {
        setPages({
          ...pages,
          page: result.page,
          totalPages: result.totalPages,
        });
        setData(result.data);
      } else {
        console.error("Error fetching data:", result.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pages.totalPages) {
      setPages({ ...pages, page: newPage });
    }
  };

  useEffect(() => {
    getData(pages.page);
  }, [pages.page]);

  return {
    filteredData,
    searchQuery,
    data,
    setData,
    setSearchQuery,
    pages,
    handlePageChange,
    form,
    setForm,
  };
};

export default useHome;
