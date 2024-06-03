import { Link } from "react-router-dom";
import useHome from "../../pages/Home/useHome";
import { useEffect, useState } from "react";

function Header() {
  const { handleLogout } = useHome();
  const token = localStorage.getItem("token");
  const [isToken, setIsToken] = useState(!!token);
  const [miniMenu, setMiniMenu] = useState(false);

  useEffect(() => {
    setIsToken(!!token);
  }, [token]);

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative w-full z-10">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link to="">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </Link>

        <div
          id="collapseMenu"
          className={`lg:block max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
          style={{
            opacity: miniMenu ? 1 : 0,
            visibility: miniMenu ? "visible" : "hidden",
            transform: miniMenu ? "translateY(0)" : "translateY(-100%)",
            transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
          }}
        >
          <button
            id="toggleClose"
            className={`lg:hidden fixed rounded-full bg-white p-3`}
            onClick={() => setMiniMenu(false)}
            style={{ top: '10px', right: '10px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <Link to="">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                to=""
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                to=""
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Mail Templates
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                to=""
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-3">
          {!!isToken && <button
            className="shadow bg-[#007bff] border-2 border-[#007bff] hover:bg-transparent hover:text-[#007bff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-1 transition-all ease-in-out duration-300"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>}

          <button id="toggleOpen" className="lg:hidden" onClick={() => setMiniMenu(true)}>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
