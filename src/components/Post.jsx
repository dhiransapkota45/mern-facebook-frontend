import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { NewContext } from '../context/context'
import PostCard from './PostCard'



const Post = () => {
  const [getPost, setGetPost] = useState([])
  const context1 = useContext(NewContext)
  const { setOpenModal, BaseURL } = context1

  useEffect(() => {
    const fetcher = async () => {
      const responseRaw = await fetch(`${BaseURL}/user/getpost/${localStorage.getItem("userId")}`)
      const response = await responseRaw.json()
      console.log(response);
      setGetPost(response.getPost)
    }
    fetcher()

  }, [])
  return (
    <>
      <div className=''>
        
        <div className=' flex p-4 items-center '>
          <img src="/images/profile.jpg" alt="profile" className='w-12 h-12 rounded-3xl mr-4' />
          <button onClick={() => setOpenModal(true)} className='bg-gray-800 p-2 rounded-3xl w-full text-gray-400  text-left hover:bg-gray-700'>
            What's on your mind, Username?
          </button>
        </div>
        <div className='p-4'>
          {
            getPost.map((postdetails) => {
              return (<PostCard postdetails={postdetails} />)

            })
          }
        </div>
      </div>
    </>
  )
}

export default Post