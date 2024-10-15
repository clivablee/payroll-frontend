import React from 'react'
import Drawer from './Drawer'

function LayoutBody({
    children
}) {
  return (
    <div className='flex'>
        <Drawer />
        <div className='flex-grow p-4 bg-gray-100'>
          {children}
        </div>
        <p className=' text-sm absolute bottom-0 right-0 p-4'>
          Today is Wednesday, Octovty 02, 2024 04:51:24
        </p>
    </div>
  )
}

export default LayoutBody