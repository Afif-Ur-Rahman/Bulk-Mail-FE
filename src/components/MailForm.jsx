/* eslint-disable react/prop-types */
import { useAllContexts } from "../context";
import { SendMailService } from "../services";

function MailForm({ setSendMail }) {
  const { checkedEmails, mailForm, setMailForm, token } = useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const handleOnChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setMailForm((prevData) => ({
      ...prevData,
      to: checkedEmails,
      [id]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="backdrop-blur-sm bg-white bg-opacity-90 p-4 rounded-xl shadow-lg w-fit max-w-sm border-gray-400 border-solid border-2">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Send Email
        </h1>
        <form className="flex flex-col space-y-4">
          <div>
            <label
              className="flex items-start text-gray-700 font-semibold mb-2"
              htmlFor="to"
            >
              To:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="to"
              type="text"
              value={checkedEmails}
              placeholder="Recipient's email address"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div>
            <label
              className="flex items-start text-gray-700 font-semibold mb-2"
              htmlFor="subject"
            >
              Subject:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="subject"
              type="text"
              placeholder="Email subject"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div>
            <label
              className="flex items-start text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="message"
              rows="6"
              placeholder="Your message"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
              type="button"
              onClick={() => {
                SendMailService(mailForm, base_url, token);
                setSendMail(false);
              }}
            >
              Send Mail
            </button>
            <button
              className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
              onClick={() => {
                setSendMail(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MailForm;
