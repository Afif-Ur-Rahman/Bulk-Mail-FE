/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAllContexts } from "../../context";

const useHome = () => {
  const { data, setData, addDataForm, setAddDataForm, pages, setPages } =
    useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState(false);
  const [editData, setEditData] = useState(false);

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

  useEffect(() => {
    getData(pages.page);
  }, [pages.page]);

  return {
    filteredData,
    searchQuery,
    setSearchQuery,
    form,
    setForm,
    editData,
    setEditData,
    addDataForm,
    setAddDataForm,
  };
};

export default useHome;
