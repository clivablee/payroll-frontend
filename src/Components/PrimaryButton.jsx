import React from 'react'

function PrimaryButton({
    label,
    onClick,
}) {
  return (
    <button className='bg-green-900 px-6 py-2 text-white rounded-md' onClick={onClick}>
        <p>{label}</p>
    </button>
  )
}

export default PrimaryButton