/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";

const useAddData = (
  setData,
  setForm,
  pages,
  setPages,
  setEditData,
  formData,
  setFormData
) => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      handleUpload(selectedFile);
    }
  };

  const handleUpload = async (selectedFile) => {
    const payload = selectedFile ? new FormData() : formData;
    if (selectedFile) payload.append("file", selectedFile);

    try {
      const response = await fetch(`${base_url}/savedata`, {
        method: "POST",
        body: selectedFile ? payload : JSON.stringify(payload),
        headers: selectedFile ? {} : { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (result.success) {
        if (selectedFile && fileInputRef.current) {
          fileInputRef.current.value = "";
          setFile(null);
        }
        setPages({
          ...pages,
          page: result.page,
          totalPages: result.totalPages,
        });
        setData(result.data);
        if (!selectedFile) {
          setFormData({
            "First Name": "",
            "Last Name": "",
            "Job Title": "",
            Company: "",
            Email: "",
            "Company Phone": "",
            Industry: "",
            City: "",
            Country: "",
            Status: "",
          });
        }
        setForm(false);
      } else {
        setError(
          selectedFile ? "Failed to upload file" : "Failed to Save Data"
        );
      }
    } catch (error) {
      setError(selectedFile ? "Error uploading file" : "Failed to Save Data");
    }
  };

  const handleEditData = () => {
    setEditData(false);
    setForm(false);
  };

  return {
    handleFileChange,
    error,
    handleOnChange,
    handleUpload,
    handleEditData,
  };
};

export default useAddData;
