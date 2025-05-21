import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const SignInModal = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  // Disable scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll on unmount
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose(); // close only when background clicked
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1050] p-4"
    >
      <div
        className="bg-white max-w-md w-full p-8 relative font-inter transition-transform duration-300 ease-out shadow-lg rounded-xl"
        onClick={(e) => e.stopPropagation()} // prevent bubbling to background
      >
        {/*  Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 cursor-pointer"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
        </button>

        <h2 className="text-lg font-bold mb-6">Welcome to Broki</h2>

        {/* Tabs */}
        <div className="flex space-x-8 mb-6 font-semibold text-sm flex-wrap text-gray-700">
          <button
            onClick={() => setIsSignIn(true)}
            className={`cursor-pointer pb-1 ${
              isSignIn ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`cursor-pointer pb-1 ${
              !isSignIn ? "border-b-2 border-black" : "text-gray-400"
            }`}
          >
            New Account
          </button>
        </div>

        {/* Forms */}
        {isSignIn ? (
          <form className="space-y-4">
            <label htmlFor="phone" className="text-sm font-semibold">
              Enter Phone Number
            </label>
            <div className="flex gap-[10px] flex-wrap">
              <select
                defaultValue="+91"
                className="border rounded-lg px-4 py-3 w-[calc(50%-5px)] text-sm text-gray-600"
              >
                <option value="+91">+91 - India</option>
                <option value="+44">+44 - UK</option>
                <option value="+1">+1 - USA</option>
              </select>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="border rounded-lg px-4 py-3 w-[calc(50%-5px)] text-sm text-gray-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2ac1a7] hover:bg-[#27a994] text-white font-bold py-3 rounded-lg flex justify-center items-center space-x-2 cursor-pointer"
            >
              <span>Send OTP</span>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                className="h-4 w-4 text-white"
              />
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="text-sm font-semibold">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="border rounded-lg px-4 py-3 w-full text-sm text-gray-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border rounded-lg px-4 py-3 w-full text-sm text-gray-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="border rounded-lg px-4 py-3 w-full text-sm text-gray-600 mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2ac1a7] hover:bg-[#27a994] text-white font-bold py-3 rounded-lg flex justify-center items-center space-x-2 cursor-pointer"
            >
              <span className="cursor-pointer">Sign Up</span>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                className="h-4 w-4 text-white"
              />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
