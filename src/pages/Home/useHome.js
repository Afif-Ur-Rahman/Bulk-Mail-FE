/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAllContexts } from "../../context";
import { GetDataService } from "../../services";

const useHome = () => {
  const {
    data,
    setData,
    addDataForm,
    setAddDataForm,
    pages,
    setPages,
    searchData,
    setSearchData,
    form,
    setForm,
    userInfo,
    token,
    checkedEmails,
  } = useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;

  const filteredData = data.filter((item) => {
    const query = searchData.toLowerCase();
    if (query === "active") {
      return item?.Status?.toLowerCase() === "active";
    }
    return (
      item?.["First Name"]?.toLowerCase().includes(query) ||
      item?.["Last Name"]?.toLowerCase().includes(query) ||
      item?.Title?.toLowerCase().includes(query) ||
      item?.Company?.toLowerCase().includes(query) ||
      item?.Email?.toLowerCase().includes(query) ||
      item?.["Company Phone"]?.toLowerCase().includes(query) ||
      item?.Industry?.toLowerCase().includes(query) ||
      item?.City?.toLowerCase().includes(query) ||
      item?.Country?.toLowerCase().includes(query) ||
      item?.Status?.toLowerCase().includes(query)
    );
  });

  const handleGetData = async () => {
    await GetDataService(base_url, pages, setPages, setData, token);
  };

  useEffect(() => {
    handleGetData();
  }, [pages.page]);

  return {
    filteredData,
    form,
    setForm,
    addDataForm,
    setAddDataForm,
    searchData,
    setSearchData,
    userInfo,
    checkedEmails,
  };
};

export default useHome;
