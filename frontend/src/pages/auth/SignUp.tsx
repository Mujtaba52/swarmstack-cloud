import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const authApiUrl = import.meta.env.VITE_AUTH_API_URL;
  const signUpApi = `${authApiUrl}/signup`; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post(signUpApi, formData);
      console.log("Signup success:", response.data);
      setSuccessMessage("Account created successfully! Redirecting to login...");

      setTimeout(() => {
        navigate("/sign-in");
      }, 2000); 
    } catch (err) {
      console.error(err);
      alert("Sign up failed. Please try again.");
    }
  };

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <div className="flex gap-32 pt-12 animate-fadeInUp">
        <img
          src="/assets/images/svg/authPage/authPageSideImg.svg"
          className="w-[750px] h-[550px]"
        />
        <div className="flex flex-col">
          <div className="font-medium text-4xl pb-6">Create an account</div>
          <div className="font-normal pb-12">Enter your details below</div>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
            placeholder="Email or Phone Number"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
            placeholder="Password"
          />
          <button
            onClick={handleCreateAccount}
            className="bg-[#DB4444] text-white max-w-96 rounded py-4 mb-3"
          >
            Create Account
          </button>
          <div className="flex justify-evenly">
            <a className="font-light">Already have an account?</a>
            <button onClick={handleLoginClick} className="underline">
              Log in
            </button>
          </div>
            {successMessage && (
                <div className="my-4 text-center text-green-600 font-medium">
                    {successMessage}
                </div>
            )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
