import React from 'react'

function Dropdown({
    name,
    id,
    options,
}) {
  return (
    <select className='w-60 border rounded-md border-gray-300 p-2'  name={name} id={id}>
        {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
        ))}
    </select>
  )
}

export default Dropdown;