const UploadDataService = async (
    selectedFile,
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
) => {
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

export default UploadDataService;
