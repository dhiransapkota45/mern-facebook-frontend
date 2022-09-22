import React from 'react'

const UserShower = ({ user, setAddFriendHandler }) => {
  return (
    <div className='flex justify-between border-b border-gray-400 my-3 pt-2'>
      <div className='flex items-end'>
        <img className='w-12 rounded-3xl mr-2' src="/images/profile.jpg" alt="" />
        <div>{user.firstname} {user.lastname} {user.email}</div>
      </div>
      <form onSubmit={(e)=>{ setAddFriendHandler(e,user)}}>
        <button type='submit' className='bg-blue-700 rounded-lg text-sm p-1'>Add Friend</button>
      </form>
    </div>
  )
}

export default UserShower