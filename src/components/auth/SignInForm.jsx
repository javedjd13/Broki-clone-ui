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
