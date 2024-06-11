import { useState, useRef } from "react";
import { useAllContexts } from "../../context";
import { UpdateDataService, UploadDataService } from "../../services";

const useAddData = () => {
  const {
    addDataForm,
    setAddDataForm,
    pages,
    setPages,
    data,
    setData,
    errors,
    setErrors,
    setForm,
    editData,
    setEditData,
    newId,
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
      handleUploadData(selectedFile);
    }
  };

  const handleUploadData = async () => {
    await UploadDataService(
      file,
      setFile,
      addDataForm,
      setAddDataForm,
      pages,
      setPages,
      setData,
      errors,
      setErrors,
      setForm,
      fileInputRef,
      base_url
    );
  };

  const handleUpdateData = async () => {
    await UpdateDataService(newId, addDataForm, data, setData, base_url);
    setEditData(false);
    setForm(false);
  };

  return {
    handleFileChange,
    errors,
    handleOnChange,
    handleUploadData,
    addDataForm,
    setAddDataForm,
    editData,
    setForm,
    handleUpdateData,
  };
};

export default useAddData;
