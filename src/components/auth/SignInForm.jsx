import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { signIn } from "../../apiAction/login/Index";
import { setUser } from "../../redux/authSlice";

const SignInForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [otpSent, setOtpSent] = useState(false); // Track OTP sent state

  const loginMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      dispatch(setUser({ user: data.user, token: data.token }));
      localStorage.setItem("authToken", data.token);
      onClose();
    },
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // OTP send logic yahan lagayein
    console.log("Sending OTP to:", email);
    setOtpSent(true); // Show OTP input after sending OTP
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    const otp = e.target.otp.value;
    // Verify OTP logic yahan lagayein
    console.log("Verifying OTP:", otp);
    // loginMutation.mutate(phoneOrEmail); <-- Real login logic
  };

  return (
    <form
      className="space-y-4"
      onSubmit={otpSent ? handleOtpVerify : handleLoginSubmit}
    >
      <label htmlFor="email" className="text-sm font-semibold">
        Enter Email
      </label>
      <div className="flex gap-[10px] flex-wrap">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="border rounded-lg px-4 py-3 w-[calc(100%-5px)] text-sm text-gray-600"
          required
        />
      </div>

      {!otpSent && (
        <>
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
        </>
      )}

      {otpSent && (
        <>
          <label htmlFor="otp" className="text-sm font-semibold">
            Enter OTP
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            placeholder="Enter OTP"
            className="border rounded-lg px-4 py-3 w-full text-sm text-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#2ac1a7] hover:bg-[#27a994] text-white font-bold py-3 rounded-lg cursor-pointer"
          >
            Verify OTP
          </button>
        </>
      )}
    </form>
  );
};

export default SignInForm;
