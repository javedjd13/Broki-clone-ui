import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faUserCircle,
  faArrowUpRightFromSquare,
  faXmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/BrokiLogo.png";
import SignInModal from "../../components/auth/SignInModal";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../lib/Constant";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `text-base font-semibold ${
                    isActive
                      ? "text-[#00BFA6]"
                      : "text-black hover:text-[#00BFA6]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-6">
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
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white w-72 md:w-96 h-full shadow-md "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hsidebar-header flex justify-between items-center bg-[hsla(8,79%,62%,0.07)] border-b border-[#ddd] pt-[25px] pr-[20px] pb-[15px] pl-[30px]">
              <h4 className="title">Welcome to Broki</h4>
              <div
                className="sidebar-close-icon text-[#fff]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <div className="far fa-times text-white bg-[#26c4a0] rounded-full h-10 w-10 flex items-center justify-center">
                  <FontAwesomeIcon
                    onClick={() => setSidebarOpen(false)}
                    icon={faXmark}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Used NavLink in Sidebar also */}
            <div className="h-screen overflow-y-auto p-6 flex flex-col">
              <div className="flex flex-col flex-grow">
                {navLinks.map(({ label, to, icon }) => (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex justify-between items-center py-4 font-medium text-sm ${
                        isActive
                          ? "text-[#00BFA6]"
                          : "text-black hover:text-[#00BFA6]"
                      }`
                    }
                  >
                    <span>{label}</span>
                    <FontAwesomeIcon icon={icon} />
                  </NavLink>
                ))}

                {/* Scrollable section below */}
                <div className="mt-10 text-sm text-black">
                  {/* Row 1: Left + Right Text */}
                  <div className="flex flex-col md:flex-row justify-between mb-2 text-sm font-semibold">
                    <div>Total Free Customer Care</div>
                    <div className="md:text-right mt-1 md:mt-0">
                      Need Live Support?
                    </div>
                  </div>

                  {/* Row 2: Phone + Email */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="font-bold text-base flex items-center">
                      <FontAwesomeIcon icon={faPhone} className="mr-2" />
                      +(91) 987 010 5602
                    </div>
                    <div className="text-base mt-2 md:mt-0 md:text-right">
                      contact@broki.in
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4 mt-7">
                    <span className="font-semibold">Follow us</span>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="hover:text-[#00BFA6] cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="hover:text-[#00BFA6] cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="hover:text-[#00BFA6] cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="hover:text-[#00BFA6] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
