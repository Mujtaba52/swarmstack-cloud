import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginRequest, loginSuccess } from '../../redux/slices/authSlice';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            dispatch(loginRequest());

            const response = await axios.post('/login', {
                email,
                password,
            });

            const token = response.data.access_token;

            const user = {
                firstName:"Muhammad", lastName: "Ali"
            };

            dispatch(loginSuccess({ token, user }));
    navigate("/");

        } catch (error) {
            console.error('Login failed', error);
            
        }
    };

    return (
        <div className="flex gap-32 pt-12 animate-fadeInUp">
            <img src="/assets/images/svg/authPage/authPageSideImg.svg" className="w-[750px] h-[550px]" />
            <div className="flex flex-col">
                <div className="font-medium text-4xl pb-6">Log in to Exclusive</div>
                <div className="font-normal pb-12">Enter your details below</div>
                <input
                    type="text"
                    className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
                    placeholder="Email or Phone Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-between">
                    <button
                        className="bg-[#DB4444] text-white max-w-36 rounded px-12"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
