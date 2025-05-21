const SignInModal = ({ onClose }) => {
  return (
    <div className="fade fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-[1055] 

 p-4">
      <div className="bg-[#fff] max-w-md w-full p-8 relative font-inter transform-none transition-transform duration-300 ease-out box-shadow rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h2 className="text-lg font-bold mb-6">Welcome to Broki</h2>
        <div className="flex space-x-8 mb-6 font-semibold text-sm flex-wrap text-gray-700">
          <button className="border-b-2 border-black pb-1">Sign In</button>
          <button disabled className="text-gray-400 cursor-default">New Account</button>
        </div>
        <form className="space-y-4">
          <label htmlFor="phone" className="text-sm font-semibold">Enter Phone Number</label>
          <div className="flex space-x-4 flex-col sm:flex-row">
            <select defaultValue="+91" className="border rounded-lg px-4 py-3 w-full sm:w-36 text-sm text-gray-600">
              <option value="+91">+91 - India</option>
            </select>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="border rounded-lg px-4 py-3 w-full text-sm text-gray-600"
            />
          </div>
          <button type="submit" className="w-full bg-[#2ac1a7] hover:bg-[#27a994] text-white font-bold py-3 rounded-lg flex justify-center items-center space-x-2">
            <span>Send OTP</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
