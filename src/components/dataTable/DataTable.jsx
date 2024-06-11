/* eslint-disable react/prop-types */
import { useAllContexts } from "../../context";
import { useState, useEffect } from "react";
import { CheckIcon, CloseIcon, EditIcon } from "../../assets/Icons";

const DataTable = ({ filteredData, setEditData, setForm }) => {
  const { data, setData, setAddDataForm } = useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [checkedItems, setCheckedItems] = useState([]);

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

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`${base_url}/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Status: newStatus }),
      });

      if (response.ok) {
        const updatedData = data.map((item) =>
          item._id === id ? { ...item, Status: newStatus } : item
        );
        setData(updatedData);
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 table-auto overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="py-3 px-4 pe-0">
            <div className="flex items-center h-5">
              <input
                id="hs-table-search-checkbox-all"
                type="checkbox"
                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                onChange={handleSelectAll}
                checked={checkedItems.every(Boolean)}
              />
              <label htmlFor="hs-table-search-checkbox-all" className="sr-only">
                Checkbox
              </label>
            </div>
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            First Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Last Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Job Title
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Company
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Company Number
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Industry
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            City
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Country
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {filteredData.map((item, index) => (
          <tr key={item._id}>
            <td className="py-3 ps-4">
              <div className="flex items-center h-5">
                <input
                  id={`checkbox-${index}`}
                  type="checkbox"
                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`checkbox-${index}`} className="sr-only">
                  Checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              {item["First Name"]}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item["Last Name"]}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item["Job Title"]}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item.Company}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              <a href={`mailto:${item.Email}`}>{item.Email}</a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item["Company Phone"]}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item.Industry}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item.City}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item.Country}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {item.Status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              <div className="flex items-center justify-between">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setForm(true);
                    setEditData(true);
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
                  }}
                >
                  <EditIcon />
                </div>
                <div>
                  {item.Status === "active" ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleStatusChange(item._id, "inactive")}
                    >
                      <CloseIcon />
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleStatusChange(item._id, "active")}
                    >
                      <CheckIcon />
                    </div>
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
