import React from 'react'
import { FaRegUserCircle  } from 'react-icons/fa';

const Drawer = ({
}) => {

    const toggleDrawer = () => {
    }

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
           <a href="#" className='text-red-600 hover:underline'>Logout</a>
        </nav>
    </div>
  )
}

export default Drawer