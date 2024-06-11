/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAllContexts } from "../../context";

const useDataTable = (filteredData) => {
  const {
    data,
    setData,
    setAddDataForm,
    setEditData,
    setForm,
    checkedItems,
    setCheckedItems,
    setNewId,
  } = useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    setCheckedItems(new Array(data.length).fill(false));
  }, [data]);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setCheckedItems(new Array(filteredData.length).fill(isChecked));
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = checkedItems.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedItems(updatedCheckedItems);
  };

  const handleEditClick = (item) => {
    setForm(true);
    setEditData(true);
    setNewId(item._id);
    setAddDataForm({
      "First Name": item["First Name"],
      "Last Name": item["Last Name"],
      "Job Title": item["Job Title"],
      Company: item.Company,
      Email: item.Email,
      "Company Phone": item["Company Phone"],
      Industry: item.Industry,
      City: item.City,
      Country: item.Country,
      Status: item.Status,
    });
  };

  return {
    handleSelectAll,
    handleCheckboxChange,
    checkedItems,
    setCheckedItems,
    data,
    setData,
    base_url,
    handleEditClick,
  };
};

export default useDataTable;
