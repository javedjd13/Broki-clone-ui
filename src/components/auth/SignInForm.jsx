import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { signIn } from "../../apiAction/login/Index";
import { setUser } from "../../redux/authSlice";

const SignInForm = ({ onClose }) => {
  const dispatch = useDispatch();

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
    const phone = e.target.phone.value;
    loginMutation.mutate(phone);
  };

  return (
    <form className="space-y-4" onSubmit={handleLoginSubmit}>
      <label htmlFor="phone" className="text-sm font-semibold">
        Enter Phone Number
      </label>
      <div className="flex gap-[10px] flex-wrap">
        <select
          defaultValue="+91"
          name="countryCode"
          id="countryCode"
          className="border rounded-lg px-4 py-3 w-[calc(50%-5px)] text-sm text-gray-600"
        >
          <option value="+91">+91 - India</option>
          <option value="+44">+44 - UK</option>
          <option value="+1">+1 - USA</option>
        </select>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          className="border rounded-lg px-4 py-3 w-[calc(50%-5px)] text-sm text-gray-600"
          required
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
  );
};

export default SignInForm;
