import React from 'react'
import TextField from '../../Components/TextField';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen 
    bg-gray-100'>
        <form action="POST">
            <h1 className='text-3xl mb-10'>Biocostech</h1>
            <p className='text-xl font-bold'>Welcome!</p>
            <p className='mb-10'>Please enter your credentials to access your account</p>
            <div className="mb-8">
                <TextField 
                    label="Username"
                    placeholder="Username"
                    type="text"
                    suffixIcon={<FaUser />}
                />
            </div>
            
            <div className="mb-8">
                <TextField 
                    label="Password"
                    placeholder="Password"
                    type="password"
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
