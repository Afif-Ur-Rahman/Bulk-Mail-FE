const UpdateDataService = async (
  id,
  addDataForm,
  data,
  setData,
  base_url
) => {
  try {
    const response = await fetch(`${base_url}/${id}/updatedata`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addDataForm }),
    });

    if (response.ok) {
      const updatedData = data.map((item) =>
        item._id === id
          ? {
              ...item,
              "First Name": addDataForm["First Name"],
              "Last Name": addDataForm["Last Name"],
              "Job Title": addDataForm["Job Title"],
              Company: addDataForm.Company,
              Email: addDataForm.Email,
              "Company Phone": addDataForm["Company Phone"],
              Industry: addDataForm.Industry,
              City: addDataForm.City,
              Country: addDataForm.Country,
              Status: addDataForm.Status,
            }
          : item
      );
      setData(updatedData);
    } else {
      console.error("Failed to update status");
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

export default UpdateDataService;
