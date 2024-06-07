/* eslint-disable react/prop-types */
import { useAllContexts } from "../../context";
import { MenuIcon, LockIcon, LogoutIcon } from "../../assets/Icons";
import PassChange from "../passChange/PassChange";

function ProfileSideBar({
  handleImageChange,
  handleLogout,
  setIsOpen,
  selectedImage,
  passChange,
  setPassChange,
}) {
  const { user } = useAllContexts();
  return (
    <nav
      className={`bg-white shadow-xl h-screen fixed top-0 right-0 min-w-[250px] py-6 font-[sans-serif] overflow-auto`}
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
          <h1 className="text-xl text-center">{user.email}</h1>
        </div>

        <ul className="flex flex-col w-full h-[85%] overflow-auto">
          <li>
            <div
              className="text-black cursor-pointer text-sm flex items-center hover:text-[#007bff] hover:border-l-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              onClick={() => {
                setPassChange(true);
              }}
            >
              <LockIcon />
              <span>Change Password</span>
            </div>
            {passChange && <PassChange setPassChange={setPassChange} />}
          </li>

          <li>
            <a
              className="text-black cursor-pointer text-sm flex items-center hover:text-[#007bff] hover:border-l-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all"
              onClick={() => handleLogout()}
            >
              <LogoutIcon />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ProfileSideBar;
