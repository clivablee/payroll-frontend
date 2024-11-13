import React from 'react'
import LayoutBody from '../../../Components/LayoutBody'
import TextField from '../../../Components/TextField'
import EmployeeTable from '../Components/EmployeeTable'
import Dropdown from '../../../Components/Dropdown'
import PrimaryButton from '../../../Components/PrimaryButton'
import EmployeeFilter from '../Components/EmployeeFilter'

function EmployeeScreen() {
  return (
    <div>
        <LayoutBody 
            children={
                <>
                    <h1>All Employees</h1>
                    <p>View, search and add new employee</p>
                    <EmployeeFilter />
                    <EmployeeTable />
                </>
            }
        />
    </div>
  )
}

export default EmployeeScreen