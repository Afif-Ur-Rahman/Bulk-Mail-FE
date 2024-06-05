/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useHome = () => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${base_url}/upload-csv`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setFile(null);
        setData(result.data);
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      setError("Error uploading file");
    }
  };

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
    handleUpload,
    handleFileChange,
    filteredData,
    searchQuery,
    error,
    fileInputRef,
    data,
    setSearchQuery,
    pages,
    handlePageChange,
  };
};

export default useHome;
