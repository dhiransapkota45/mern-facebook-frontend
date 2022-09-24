import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {NewContext} from "../context/context"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { FaRegCommentAlt } from "react-icons/fa"
// import likeSound from "/sounds/likeSound.mp3"
import useSound from 'use-sound';
//make date also

const PostCard = ({ postdetails }) => {
  const [ownLike, setOwnLike] = useState(postdetails.likers.length)
  const {BaseURL} =  useContext(NewContext)
  const [play] = useSound("/sounds/likeSound.mp3");

  const likedetails = () => {
    return (
      <div className='px-2'><AiFillLike className=' inline text-sm' />
        {ownLike ? `You and ${postdetails.likers.length} Others` : postdetails.likers.length}
      </div>
    )
  }

  const likeHandler = async() => {
    setOwnLike(!ownLike)
    if(!ownLike){play()}
    const responseRaw = await fetch(`${BaseURL}/user/post/like/${postdetails._id}/${localStorage.getItem("userId")}`, {
      method:"PUT"
    })
    const response = await responseRaw.json()
    console.log(response);

  }
  return (
    <div className=' bg-gray-800 rounded-md mb-4 '>
      <div className='flex mb p-2'>
        <img src={`http://localhost:8000/${postdetails.posterId.profile_picture}`} alt="profile" className='w-12 h-12 rounded-3xl mr-2' />
        <div>{postdetails.posterId.firstname} {postdetails.posterId.lastname}</div>
      </div>
      <div className='mb-3 px-2'>{postdetails.description}</div>

      <img className='w-full overflow-hidden' src={postdetails.postImage ? postdetails.postImage : "/images/profile.jpg"} alt="post_image" />
      {likedetails()}
      <div className='flex overflow-hidden p-2'>
        <div onClick={likeHandler} className='p-2 grow flex justify-center  cursor-pointer hover:bg-gray-600 rounded'>
          {ownLike ? <><AiFillLike className={`text-2xl text-blue-500`} /><span className=' text-blue-500 font-semibold'>Like</span></> :
            <><AiOutlineLike className={`text-2xl`} /><span>Like</span></>
          }
        </div>
        <div className='grow flex justify-center items-center cursor-pointer hover:bg-gray-600 rounded'>
          <FaRegCommentAlt className='text-xl' /><span> Comment</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard