import React from 'react';
import { FaBirthdayCake } from "react-icons/fa";

function HomeBirthdayCelebrant() {
    const data = [
        { id: 1, name: 'Vidal', age: '25', gender: 'Male' },
        { id: 2, name: 'Cleeve', age: '25', gender: 'Male' },
        { id: 3, name: 'Choi', age: '25', gender: 'Male' },
    ];

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
                        <th className={cellClass()}>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className='hover:bg-gray-100'>
                            <td className={cellClass()}>{user.id}</td>
                            <td className={cellClass()}>{user.name}</td>
                            <td className={cellClass()}>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default HomeBirthdayCelebrant