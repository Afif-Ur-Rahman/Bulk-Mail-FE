/* eslint-disable react/prop-types */
import { ActionIcon } from "../../assets/Icons";
import useDataTable from "./useDataTable";
import { UpdateStatusService } from "../../services";

const DataTable = ({ filteredData }) => {
  const {
    handleSelectAll,
    handleCheckboxChange,
    checkedItems,
    data,
    setData,
    base_url,
    handleEditClick,
    actions,
    setActions,
    handleShowData,
    token,
  } = useDataTable(filteredData);

  const tableHeadings = [
    "Checkbox",
    "First Name",
    "Last Name",
    "Job Title",
    "Company",
    "Email",
    "Email Status",
    "Company Number",
    "Industry",
    "City",
    "Country",
    "Status",
    "Actions",
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200 table-auto overflow-hidden pb-4">
      <thead className="bg-gray-50">
        <tr>
          {tableHeadings.map((item, index) => (
            <th scope="col" className="py-3 px-4 pe-0" key={index}>
              {item === "Checkbox" ? (
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-search-checkbox-all"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                    onChange={handleSelectAll}
                    checked={checkedItems.every(Boolean)}
                  />
                </div>
              ) : (
                item
              )}
            </th>
          ))}
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
            <td
              className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium cursor-pointer"
              onClick={() => handleShowData(item)}
            >
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
              {item["Email Status"]}
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
            <td
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
              onClick={async () => {
                const newActions = [...actions];
                newActions[index] = !newActions[index];
                setActions(newActions);
              }}
            >
              <div className="flex items-center justify-center">
                <div>
                  <ActionIcon />
                </div>
                {actions[index] && (
                  <div className="relative">
                    <div className="absolute top-0 right-2 w-fit bg-white rounded-md overflow-hidden shadow-xl z-10">
                      <div
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </div>
                      <div
                        className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                          item.Status === "Active"
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                        onClick={() =>
                          UpdateStatusService(
                            item._id,
                            item.Status === "Active" ? "Inactive" : "Active",
                            data,
                            setData,
                            base_url,
                            token
                          )
                        }
                      >
                        {item.Status === "Active" ? "Inactive" : "Active"}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
