/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHome = () => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  console.log("data = ", data);

  const navigate = useNavigate();

  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item?.['First Name']?.toLowerCase().includes(query) ||
      item?.['Last Name']?.toLowerCase().includes(query) ||
      item?.Title?.toLowerCase().includes(query) ||
      item?.Company?.toLowerCase().includes(query) ||
      item?.Email?.toLowerCase().includes(query) ||
      item?.['Company Number']?.toLowerCase().includes(query) ||
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
        console.log("result = ", result);
        setData(result.data);
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      setError("Error uploading file");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getData = async () => {
    try {
      const response = await fetch(`${base_url}/getdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const firstTenEntries = result.data.slice(0, 10);
      setData(firstTenEntries);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    handleLogout,
    handleUpload,
    handleFileChange,
    filteredData,
    searchQuery,
    error,
    fileInputRef,
    data,
    setSearchQuery,
  };
};

export default useHome;
