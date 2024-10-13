import React, { useState } from 'react'
import TextField from '../../../Components/TextField';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuthStore from '../Store/AuthStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const passwordVisibility = useAuthStore((state) => state.passwordVisibility);
    const togglePasswordVisibility = useAuthStore((state) => state.togglePasswordVisibility);
    const login = useAuthStore((state) => state.login);
    const setUsername = useAuthStore((state) => state.setUsername);
    const setPassword = useAuthStore((state) => state.setPassword);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login();

        console.log(isLoggedIn);

        if (useAuthStore.getState().isLoggedIn) {
            navigate("/");
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen 
    bg-gray-100'>
        <form action="POST" onSubmit={handleSubmit}>
            <h1 className='text-3xl mb-10'>Biocostech</h1>
            <p className='text-xl font-bold'>Welcome!</p>
            <p className='mb-10'>Please enter your credentials to access your account</p>
            <div className="mb-8">
                <TextField 
                    label="Username"
                    placeholder="Username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={useAuthStore((state) => state.username)}
                    suffixIcon={<FaUser />}
                />
            </div>
            
            <div className="mb-8">
                <TextField 
                    label="Password"
                    placeholder="Password"
                    type={passwordVisibility ? "text" : "password"}
                    value={useAuthStore((state) => state.password)}
                    onChange={(e) => setPassword(e.target.value)}
                    suffixIcon={passwordVisibility ? <FaEye /> : <FaEyeSlash />}
                    onClick={togglePasswordVisibility}
                />
            </div>

            {/* <div className="remember-forgot">
                <label><input type="checkbox" name="remember-me" />Remember Me</label>
                <a href="#">Forgot password?</a>
            </div> */}

            <button className='w-full bg-blue-500 text-white p-2 rounded-2xl' type="submit">Login</button>

            {/* <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div> */}
              
        </form>
    </div>
  )
}

export default Login;
