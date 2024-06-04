import { Link } from "react-router-dom"
import Profile from "../../assets/logo.svg"

function Menu() {
  return (
    <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <Link to="/home">
                <img src={Profile} alt="logo" className="w-36" />
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                to="/home"
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
  )
}

export default Menu