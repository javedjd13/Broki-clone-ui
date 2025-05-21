import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/BrokiLogo.png";
import SignInModal from "../../pages/pages/SignInModal";
import { navLinks } from "../lib/Constant";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="bg-[#D9F0ED] px-4 sm:px-6 lg:px-8 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 relative">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-black" />
          </button>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
          <a href="/">
            <img src={Logo} alt="Broki logo" className="h-11" />
          </a>
        </div>

        {/* Mobile User Icon */}
        <div className="lg:hidden">
          <button onClick={() => setShowModal(true)}>
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-2xl text-black"
            />
          </button>
        </div>

        {/* Desktop Nav & Actions */}
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
          <div className="flex items-center space-x-6 ">
            <a
              href="/"
              className="relative px-6 py-3 text-sm font-semibold text-white rounded-xl bg-black border border-black cursor-pointer"
            >
              List Your Outlet
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-sm ml-2"
              />
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center space-x-2 text-black font-normal cursor-pointer"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-lg" />
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black"
          onClick={() => setSidebarOpen(false)}
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

      {/* Modal */}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
