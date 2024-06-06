/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";

const useAddData = (setData) => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
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
    let payload = {};
    if (selectedFile) {
      payload = new FormData();
      payload.append("file", selectedFile);
    } else {
        payload = formData;
        console.log(payload , 'payload');
    }

    try {
      const response = await fetch(`${base_url}/upload-csv`, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        if (selectedFile) {
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setFile(null);
        }
        setData(result.data);
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      setError("Error uploading file");
    }
  };
  return {
    handleFileChange,
    error,
    handleOnChange,
    formData,
    setFormData,
    handleUpload,
  };
};

export default useAddData;
