import React, { useState } from 'react'
import LayoutBody from '../../../Components/LayoutBody'
import ProfileInfo from '../Components/ProfileInfo'
import WorkInfo from '../Components/WorkInfo'
import OthersInfo from '../Components/OthersInfo'

function ProfileScreen() {

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Tab 1", content: <ProfileInfo />},
    { label: "Tab 2", content: <WorkInfo />},
    { label: "Tab 3", content: <OthersInfo />}
  ];

  return (
    <LayoutBody
        children={
            <>
              <div className='flex border-b border-gray-200'>
                {tabs.map((tab, index) => {
                  return <button 
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-12 py-2 text-sm font-medium  transition-colors duration-200
                        ${activeTab === index 
                          ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                      `}
                  > {tab.label} </button>
                })}
              </div>

              <div>
                {tabs[activeTab].content}
              </div>
            </>
        }
    />
  )
}

export default ProfileScreen