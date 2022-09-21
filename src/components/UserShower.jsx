import React from 'react'

const UserShower = ({ user }) => {
  return (
    <div className='flex justify-between border-b border-gray-400 my-3 pt-2'>
      <div className='flex items-end'>
        <img className='w-12 rounded-3xl mr-2' src="/images/profile.jpg" alt="" />
        <div>{user.firstname} {user.lastname}</div>
      </div>
      <div>
        <button className='bg-blue-700 rounded-lg text-sm p-1'>Add Friend</button>
      </div>
    </div>
  )
}

export default UserShower