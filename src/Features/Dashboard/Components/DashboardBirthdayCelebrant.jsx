import React from 'react';
import { FaBirthdayCake } from "react-icons/fa";
import useDashboardStore from '../Store/DashboardStore';

function HomeBirthdayCelebrant() {
    const celebrants = useDashboardStore((state) => state.celebrants);
  

    const cellClass = () => 'border-b border-gray-300 px-4 py-2 text-left';

  return (
    <div className='flex flex-col h-full w-full mt-4 bg-white '>
        <div className='flex items-center p-4 border-b-4'>
            <FaBirthdayCake className='text-2xl mr-2'/>
            <p>Birthday Celebrants</p>
        </div>

        <div className='flex-grow container mx-auto p-4 overflow-auto'>
            <table className='min-w-full border-collapse border-gray-300'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className={cellClass()}>ID</th>
                        <th className={cellClass()}>Name</th>
                        <th className={cellClass()}>Department</th>
                        <th className={cellClass()}>Birthday</th>
                    </tr>
                </thead>

                <tbody>
                {celebrants && celebrants.length > 0 ? (
                            celebrants.map((celebrant, index) => (
                                <tr className='hover:bg-gray-100' key={index}>
                                    <td className={cellClass()}>{index + 1}</td>
                                    <td className={cellClass()}>{celebrant.employee_name}</td>
                                    <td className={cellClass()}>{celebrant.department}</td>
                                    <td className={cellClass()}>{celebrant.date_of_birth}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className={cellClass()}>No celebrants found.</td>
                            </tr>
                        )}
                </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default HomeBirthdayCelebrant