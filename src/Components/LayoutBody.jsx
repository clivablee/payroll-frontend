import React from 'react'
import Drawer from './Drawer'

function LayoutBody({
    children
}) {
  return (
    <div className='flex h-screen'>
        <Drawer />
        <div className='flex-grow p-4 bg-gray-100'>
          {children}
        </div>
    </div>
  )
}

export default LayoutBody