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
  } = useDataTable(filteredData);

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
            Email Status
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
                            base_url
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
