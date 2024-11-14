import React from 'react'
import TextField from '../../../Components/TextField'

function ProfileInfo() {

  return (
    <>
        <div>
            <h1 className='font-bold text-2xl'>Basic Information</h1>
            <div className='flex h-full'>
              <section className='flex-1 flex flex-col p-4 bg-gray-100'>
                <img src="https://i.pinimg.com/736x/0e/78/10/0e7810a7646a3f786e59e2dbe3065726.jpg" alt="profile-pic" className="mb-4" />
                <p>Allowed Format</p>
                <p>JPG, JPEG, and PNG</p>
              </section>

              <section className='flex-1 flex flex-col justify-between p-4 bg-gray-100'>
                <TextField label="First Name" value="Jose Rhett" enabled={false} />
                <TextField label="Last Name" value="Jose Rhett" enabled={false} />
                <TextField label="Present Address" value="Jose Rhett" enabled={false} multiLine={true} />
                <TextField label="Personal Email" value="Jose Rhett" enabled={false} />
                <TextField label="Emergency Contact Person" value="Jose Rhett" enabled={false} />
              </section>

              <section className='flex-1 flex flex-col justify-between p-4 bg-gray-100'>
                <TextField label="Middle Name" value="Jose Rhett" enabled={false} />
                <TextField label="Mobile Number" value="Jose Rhett" enabled={false} />
                <TextField label="Civil Status" value="Jose Rhett" enabled={false} />
                <TextField label="Gender" value="Jose Rhett" enabled={false} />
                <TextField label="Date of Birth" value="Jose Rhett" enabled={false} />
                <TextField label="Emergency Contact" value="Jose Rhett" enabled={false} />
              </section>
          </div>
        </div>
    </>
  )
}

export default ProfileInfo