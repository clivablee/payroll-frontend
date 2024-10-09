import React from 'react'
import { FaClock } from "react-icons/fa";

function HomeAttendanceSummary() {
  return (

    <div className='w-full mt-4 bg-white '>
        <div className=' flex items-center p-4 border-b-4'>
            <FaClock className='text-2xl mr-2'/>
            <p>Attendance Summary</p>
        </div>
    </div>
   
  )
}

export default HomeAttendanceSummary