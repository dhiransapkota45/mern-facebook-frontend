import React from 'react'
import { useState } from 'react'

const Modal = () => {
  return (
    <>
      <div className='w-screen h-screen fixed flex justify-center items-center bg-black opacity-50'>
        <div>
          Welcome to the modal
        </div>
      </div>
    </>
  )
}

const Post = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='flex p-4 items-center '>
        <img src="/images/profile.jpg" alt="profile" className='w-12 h-12 rounded-3xl mr-4' />
        <button onClick={() => setOpenModal(true)} className='bg-gray-800 p-2 rounded-3xl w-full text-gray-400  text-left hover:bg-gray-700'>
          What's on your mind, Username?
        </button>
      </div>
      {openModal && <Modal />}
    </>
    )
}

export default Post