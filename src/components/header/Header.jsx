import { Link } from "react-router-dom";
import Profile from "../../assets/logo.svg";
import Menu from "./Menu";
import {
  LockIcon,
  LogoutIcon,
  MenuButtonIcon,
  MenuIcon,
} from "../../assets/Icons";
import useHome from "../../pages/Home/useHome";
import useHeader from "./useHeader";

function Header() {
  const { handleLogout } = useHome();
  const {
    miniMenu,
    setMiniMenu,
    isToken,
    selectedImage,
    isOpen,
    setIsOpen,
    handleImageChange,
  } = useHeader();

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative w-full z-10">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link to="/home">
          <img src={Profile} alt="logo" className="w-36" />
        </Link>

        <div
          id="collapseMenu"
          className={`lg:block max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
          style={{
            opacity: miniMenu ? 1 : 0,
            visibility: miniMenu ? "visible" : "hidden",
            transform: miniMenu ? "translateY(0)" : "translateY(-100%)",
            transition:
              "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
          }}
        >
          <button
            id="toggleClose"
            className={`lg:hidden fixed rounded-full bg-white p-3`}
            onClick={() => setMiniMenu(false)}
            style={{ top: "10px", right: "10px" }}
          >
            <MenuIcon />
          </button>

          {isToken && <Menu />}
        </div>

        <div className="flex max-lg:ml-auto space-x-3">
          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={() => setMiniMenu(true)}
          >
            <MenuButtonIcon />
          </button>

          {isToken && (
            <div
              className="user cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={selectedImage}
                alt="User Image"
                width={"50px"}
                height={"50px"}
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
          )}
        </div>

        <nav
          className={`bg-white shadow-xl h-screen fixed top-0 right-0 min-w-[250px] py-6 font-[sans-serif] overflow-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            id=""
            className={`fixed rounded-full bg-white p-3 z-10`}
            onClick={() => setIsOpen(false)}
            style={{ top: "10px", right: "10px" }}
          >
            <MenuIcon />
          </button>
          <div className="relative flex flex-col h-full">
            <h1 className="text-xl font-bold text-center text-[#007bff]">
              Profile
            </h1>

            <div className="flex flex-col w-[90%] h-auto mx-auto mt-3">
              <label className="flex items-center justify-center py-3 cursor-pointer rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
                <input
                  type="file"
                  id="profile-image"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              <h1 className="text-xl text-center">User</h1>
            </div>

            <ul className="flex flex-col w-full h-[85%] overflow-auto">
              <li>
                <Link
                  to=""
                  className="text-black text-sm flex items-center hover:text-[#007bff] hover:border-l-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
                >
                  <LockIcon />
                  <span>Change Password</span>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  className="text-black text-sm flex items-center hover:text-[#007bff] hover:border-l-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
                >
                  <LogoutIcon />
                  <span
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
