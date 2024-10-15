import React from 'react'
import { MdWork } from "react-icons/md";
import useDashboardStore from '../Store/DashboardStore';

function HomeAnniversary() {

    const anniversaries = useDashboardStore((state) => state.anniversaries);


    const data = [
        { id: 1, name: 'Vidal', age: '25', gender: 'Male' },
        { id: 2, name: 'Cleeve', age: '25', gender: 'Male' },
        { id: 3, name: 'Choi', age: '25', gender: 'Male' },
    ];

    const cellClass = () => 'border-b border-gray-300 px-4 py-2 text-left';

  return (
    <div className='w-full  mt-4 bg-white '>
        <div className='flex items-center p-4 border-b-4'>
            <MdWork className='text-2xl mr-2'/>
            <p>Employees celebrating their anniversaries</p>
        </div>

        <div className='container mx-auto p-4'>
            <table className='min-w-full border-collapse border-gray-300'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className={cellClass()}>ID</th>
                        <th className={cellClass()}>Department</th>
                        <th className={cellClass()}>Name</th>
                        <th className={cellClass()}>Anniversary</th>
                    </tr>
                </thead>

                <tbody>
                    { anniversaries && anniversaries.length > 0 ? (
                        anniversaries.map((data, index) => (
                            <tr key={index} className='hover:bg-gray-100'>
                                <td className={cellClass()}>{index}</td>
                                <td className={cellClass()}>{data.department}</td>
                                <td className={cellClass()}>{data.employee_name}</td>
                                <td className={cellClass()}>{data.hired_date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className={cellClass()}>
                                No anniversaries found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default HomeAnniversary