import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboardList,
  faHouse,
  faPlusSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden bg-white p-4 shadow flex items-center gap-2">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <span className="text-gray-800 font-medium text-base">
          Dashboard Navigation
        </span>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white w-72 h-screen p-6 pt-10 flex flex-col justify-between transition-all duration-300 z-50
          ${isOpen ? "fixed top-0 left-0" : "hidden"} md:static md:block`}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Manage Listings
            </h2>
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/add-property"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-4 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon icon={faPlusSquare} /> Add New Property
              </NavLink>
              <NavLink
                to="/properties"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-4 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon icon={faHouse} /> My Properties
              </NavLink>
              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-4 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon icon={faClipboardList} /> Service Bookings
              </NavLink>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Manage Account
            </h2>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-black hover:bg-gray-100 transition w-full text-left"
            >
              <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
