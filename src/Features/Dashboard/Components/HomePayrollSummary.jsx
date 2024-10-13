import React from 'react'
import { FaMoneyBill } from "react-icons/fa";

function HomePayrollSummary() {
  return (
    <div className='w-full mt-4 bg-white '>
        <div className='flex items-center p-4 border-b-4'>
            <FaMoneyBill className='text-2xl mr-2'/>
            <p>Payroll Summary</p>
        </div>
    </div>
  )
}

export default HomePayrollSummary