import React from 'react'
import TextField from '../../../Components/TextField';

function OthersInfo() {
  
  const otherData = [
    {"label": "SSS No.", "value": "21"},
    {"label": "Tax Identification Number (TIN)", "value": "21"},
    {"label": "HDMF No.", "value": "21"},
    {"label": "PhilHealth No.", "value": "21"},
    {"label": "Access Rights", "value": "21"},
    {"label": "Password", "value": "21"},
  ];

  return (
    <>
      <div className='text-2xl font-bold'>Other Information</div>
      <div className='grid grid-cols-2 grid-rows-2'>
        {otherData.map((data, index) => {
          return <TextField 
            label={data.label}
            value={data.value}
          />
        })}

      </div>
    </>
  )
}

export default OthersInfo