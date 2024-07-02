/* eslint-disable react/prop-types */
import { MenuIcon } from "../../assets/Icons";
import useShowData from "./useShowData";

const ShowData = () => {
  const { setUserInfo, addDataForm } = useShowData();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="backdrop-blur-sm bg-white bg-opacity-90 p-4 rounded-xl shadow-lg w-fit max-w-max border-gray-400 border-solid border-2">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          {addDataForm["First Name"]}&apos;s Data
        </h1>
        <button
          className="fixed rounded-full bg-white p-3"
          onClick={() => setUserInfo(false)}
          style={{ top: "10px", right: "10px" }}
        >
          <MenuIcon />
        </button>
        <div className="">
          <table className="w-fit divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  First Name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm["First Name"]}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Last Name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm["Last Name"]}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Job Title
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm["Job Title"]}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Company
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm.Company}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Email
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm.Email}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Email Status
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm["Email Status"]}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Company Number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm["Company Phone"]}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Industry
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm.Industry}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  City
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm.City}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Country
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm.Country}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Status
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {addDataForm.Status}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
