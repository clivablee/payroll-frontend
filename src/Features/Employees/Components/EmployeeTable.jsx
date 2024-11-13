import React from 'react'

function EmployeeTable() {

    const data = [
        {
            id: 1,
            firstName: 'John',
            middleName: 'Doe',
            lastName: 'Doe',
            jobTitle: 'Software Developer',
            department: 'IT',
        },
        {
            id: 2,
            firstName: 'Jane',
            middleName: 'Doe',
            lastName: 'Doe',
            jobTitle: 'Software Developer',
            department: 'IT',
        },
    ];

  return (
    <div className='bg-white mt-4'>
        <table className='min-w-full border-collapse border-gray-300'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Job Title</th>
                    <th>Departments</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((employee, index) => (
                    <tr>
                        <th>{employee.id}</th>
                        <th>{employee.firstName}</th>
                        <th>{employee.middleName}</th>
                        <th>{employee.lastName}</th>
                        <th>{employee.jobTitle}</th>
                        <th>{employee.department}</th>
                        <th>View More</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeTable