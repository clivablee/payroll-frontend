import React from 'react'
import { FaRegUserCircle  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuthStore from '../Features/Login/Store/AuthStore';

const Drawer = ({ toggleDrawer }) => {

    const logout = useAuthStore((state) => state.logout);
  return (
    <div className='relative'>
        {/* <button
            onClick={toggleDrawer}
            className='p-2 bg-blue-600 text-white'
        >
            Open Drawer

        </button> */}

        <nav className='flex flex-col justify-between h-full p-4'>
            <div>
                <div className='flex items-center mb-4'>
                    <FaRegUserCircle  className='mr-2 text-4xl'/>
                    <div>
                        <p className='text-xl font-bold'>Vidal, Cleeve</p>
                        <p className='text-sm font-light'>Jr. IT Programmer</p>
                    </div>
                </div>
                <ul>
                    <li className='mb-4'><a href="#" className='text-blue-600 hover:underline'>Home</a></li>
                    <li className='mb-4'><a href="#" className='text-blue-600 hover:underline'>My Profile</a></li>
                    <li className='mb-4'><a href="#" className='text-blue-600 hover:underline'>Employees</a></li>
                    <li className='mb-4'><a href="#" className='text-blue-600 hover:underline'>Attendance</a></li>
                    <li className='mb-4'><a href="#" className='text-blue-600 hover:underline'>Payroll</a></li>
                
                </ul>
            </div>
           <Link className='text-red-600 hover:underline' onClick={() => {logout()}}>Logout</Link>
        </nav>
    </div>  
  )
}

export default Drawer