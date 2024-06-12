/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Profile from "../../assets/logo.svg";

function Menu({ setMiniMenu }) {
  return (
    <ul className="lg:flex gap-x-5 max-lg:space-y-3">
      <li className="mb-6 hidden max-lg:block">
        <NavLink to="/home">
          <img src={Profile} alt="logo" className="w-36" />
        </NavLink>
      </li>
      <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-[#007bff] block font-semibold text-[15px]"
              : "hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          }
          onClick={() => setMiniMenu(false)}
        >
          Home
        </NavLink>
      </li>
      <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
        <NavLink
          to="/emailtemplates"
          className={({ isActive }) =>
            isActive
              ? "text-[#007bff] block font-semibold text-[15px]"
              : "hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          }
          onClick={() => setMiniMenu(false)}
        >
          Mail Templates
        </NavLink>
      </li>
      <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#007bff] block font-semibold text-[15px]"
              : "hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
          }
          onClick={() => setMiniMenu(false)}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
