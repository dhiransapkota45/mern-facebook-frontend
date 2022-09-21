import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { NewContext } from '../context/context'  



const Post = () => {
  const context1 = useContext(NewContext)
  const {setOpenModal} = context1
  return (
    <>
      <div className='flex p-4 items-center '>
        <img src="/images/profile.jpg" alt="profile" className='w-12 h-12 rounded-3xl mr-4' />
        <button onClick={() => setOpenModal(true)} className='bg-gray-800 p-2 rounded-3xl w-full text-gray-400  text-left hover:bg-gray-700'>
          What's on your mind, Username?
        </button>
      </div>
    </>
    )
}

export default Post