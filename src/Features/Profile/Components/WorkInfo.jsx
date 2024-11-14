import React from 'react'
import TextField from '../../../Components/TextField'

function WorkInfo() {

  const workData = [
    { "label": "Employee ID", "value": "21"},
    { "label": "Job Title", "value": "HR Supervisor"},
    { "label": "Salary", "value": "21"},
    { "label": "Employment Status", "value": "21"},
    { "label": "Employee Type", "value": "21"},
    { "label": "Employee Level", "value": "21"},
    { "label": "Work Email", "value": "21"},
    { "label": "Assigned Branch", "value": "21"},
    { "label": "Assigned City", "value": "21"},
    { "label": "Department", "value": "21"},
    { "label": "Schedule", "value": "21"},
    { "label": "Hired Date", "value": "21"},
    { "label": "Third Month (3rd)", "value": "21"},
    { "label": "Fifth Month (3rd)", "value": "21"},
    { "label": "Regularization Date", "value": "21"},
  ];

  return (
    <>
      <div>
        <h1 className='text-2xl font-bold'>Employment Details</h1>
        <div className='grid grid-cols-3 grid-rows-5 gap-4'>
          {workData.map((data, index) => {
            return <TextField 
              label={data.label}
              value={data.value}
              key={index}
            />
          })}
          
          

        </div>
      </div>
    </>
  )
}

export default WorkInfo