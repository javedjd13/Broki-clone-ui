import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/BrokiLogo.png";
import { navLinks } from "../lib/Constant";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <nav className="bg-[#D9F0ED] px-4 sm:px-6 lg:px-8 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 relative">
        {/* Left: Menu Icon */}
        <div className="lg:hidden ">
          <button onClick={toggleSidebar} aria-label="Toggle sidebar">
            <FontAwesomeIcon icon={faBars} className="text-2xl text-black" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
          <a href="/">
            <img src={Logo} alt="Broki logo" className="h-11" />
          </a>
        </div>

        {/* Right: User Icon (visible on <1024px) */}
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl text-black"
          />
        </div>

        {/* Desktop Only: Nav Links + Button + Login */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex items-center space-x-6">
            {navLinks.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                className={`text-base font-semibold ${
                  active ? "text-[#00BFA6]" : "text-black hover:text-[#00BFA6]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="/"
              className="relative px-[30px] py-[13px] text-[15px] font-semibold text-white rounded-[12px] bg-black border border-black transition-all"
            >
              List Your Outlet
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-sm ml-2.5"
              />
            </a>
            <a
              href="/"
              className="flex items-center space-x-2 text-black font-normal"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-lg" />
              <span>Login / Register</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar - For small & medium screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black  transition-opacity duration-300"
          onClick={toggleSidebar}
        >
          <div
            className="bg-white w-64 h-full shadow-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block py-2 text-black hover:text-[#00BFA6]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
