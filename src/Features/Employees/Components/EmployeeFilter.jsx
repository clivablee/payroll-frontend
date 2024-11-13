import React from 'react'
import TextField from '../../../Components/TextField'
import Dropdown from '../../../Components/Dropdown'
import PrimaryButton from '../../../Components/PrimaryButton'

function EmployeeFilter() {
  return (
    <div className='mt-4 bg-white p-4 align items-center'>
        <div className='flex justify-between items-center'>
            <div className='flex'>
                <div className='mr-4'>
                    <p>Search an employee</p>
                    <TextField
                        placeholder="Enter first name"
                    />
                </div>

                <div className='mr-4'>
                    <h1 className='text-3xl font-bold'>120</h1>
                    <p>Total number of employees</p>
                </div>

                <div className='mr-4'>
                    <p>Department</p>
                    <Dropdown
                        name=""
                        id=""
                        options={[
                            {value: "IT", label: "IT"},
                            {value: "HR", label: "HR"},
                            {value: "Sales", label: "Sales"},
                        ]}
                    />
                    
                </div>

                <div className='mr-4'>
                    <p>Employee Status</p>
                    <Dropdown
                        name=""
                        id=""
                        options={[
                            {value: "Active", label: "Active"},
                            {value: "Inactive", label: "Inactive"},
                            {value: "All", label: "All"},
                        ]}
                    />
                </div>
            </div>
            <div>
                <PrimaryButton 
                    label="Add Employee"
                    onClick={() => {}}
                />
            </div>
            
        </div>
    </div>
  )
}

export default EmployeeFilter