/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useAllContexts } from "../../context";

const useAddData = (setForm, setEditData) => {
  const {
    addDataForm,
    setAddDataForm,
    pages,
    setPages,
    setData,
    errors,
    setErrors,
  } = useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setAddDataForm((prevData) => ({
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
    const payload = selectedFile ? new FormData() : addDataForm;
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
          setAddDataForm({
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
        setErrors(
          selectedFile
            ? { ...errors, file: "Failed to upload file" }
            : { ...errors, file: "Failed to Save Data" }
        );
      }
    } catch (error) {
      setErrors(
        selectedFile
          ? { ...errors, file: "Failed to upload file" }
          : { ...errors, file: "Failed to Save Data" }
      );
    }
  };

  const handleEditData = () => {
    setEditData(false);
    setForm(false);
  };

  return {
    handleFileChange,
    errors,
    handleOnChange,
    handleUpload,
    handleEditData,
    addDataForm,
    setAddDataForm,
  };
};

export default useAddData;
