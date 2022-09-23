import React from 'react'
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { FaRegCommentAlt } from "react-icons/fa"
//make date also

const PostCard = ({ postdetails }) => {
  return (
    <div className=' bg-gray-800 rounded-md '>
      <div className='flex mb p-2'>
        <img src="/images/profile.jpg" alt="profile" className='w-12 h-12 rounded-3xl mr-2' />
        <div>{postdetails.posterId.firstname} {postdetails.posterId.lastname}</div>
      </div>
      <div className='mb-3 px-2'>{postdetails.description}</div>

      <img className='w-full overflow-hidden' src="/images/profile.jpg" alt="post_image" />

      <div className='flex overflow-hidden p-2'>
        <div className='p-2 grow flex justify-center  hover:bg-gray-600 rounded'>
          <AiOutlineLike className=' text-2xl  ' /><span>Like</span>
        </div>
        <div className='grow flex justify-center items-center hover:bg-gray-600 rounded'>
          <FaRegCommentAlt className='text-xl' /><span> Comment</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard