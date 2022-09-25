import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { NewContext } from "../context/context"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { FaRegCommentAlt } from "react-icons/fa"
import { useForm } from "react-hook-form"
// import likeSound from "/sounds/likeSound.mp3"
import useSound from 'use-sound';
//make date also

const PostCard = ({ postdetails }) => {
  const { register, handleSubmit } = useForm()
  const [ownLike, setOwnLike] = useState(postdetails.likers.length)
  const [addComment, setAddComment] = useState(false)
  const [commentSection, setCommentSection] = useState()
  const [commentSectionShower, setCommentSectionShower] = useState(false)
  const { BaseURL } = useContext(NewContext)
  const [play] = useSound("/sounds/likeSound.mp3");

  const likedetails = () => {
    return (
      <div className='px-2 flex  my-2 justify-between'>
        <div className='flex'>
          <div className=' text-sm p-1 mr-1 bg-blue-500 rounded-3xl flex justify-center items-center'>
            <AiFillLike />
          </div>

          <div>{ownLike ? `You and ${postdetails.likers.length} Others` : postdetails.likers.length}</div>
        </div>
        <div onClick={commentShower} className=" cursor-pointer">
          Comments
        </div>
      </div>
    )
  }

  const commentShower = async () => {
    if (!commentSectionShower) {
      const responseRaw = await fetch(`${BaseURL}/user/getcomment/${postdetails._id}`)
      const response = await responseRaw.json()
      setCommentSection(response.comments)
      console.log(response);
    }
    setCommentSectionShower(!commentSectionShower)
  }

  const likeHandler = async () => {
    setOwnLike(!ownLike)
    if (!ownLike) { play() }
    const responseRaw = await fetch(`${BaseURL}/user/post/like/${postdetails._id}/${localStorage.getItem("userId")}`, {
      method: "PUT"
    })
    const response = await responseRaw.json()
    console.log(response);

  }

  const commentHandler = async (data) => {
    const responseRaw = await fetch(`${BaseURL}/user/addcomment/${postdetails._id}/${localStorage.getItem("userId")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const response = await responseRaw.json()
    console.log(response);
    setAddComment(false)

  }
  return (
    <div className=' bg-gray-800 rounded-md mb-4 '>
      <div className='flex mb p-2'>
        <img src={`http://localhost:8000/${postdetails.posterId.profile_picture}`} alt="profile" className='w-12 h-12 rounded-3xl mr-2' />
        <div>{postdetails.posterId.firstname} {postdetails.posterId.lastname}</div>
      </div>
      <div className='mb-3 px-2'>{postdetails.description}</div>

      <img className='w-full overflow-hidden' src={postdetails.postImage ? postdetails.postImage : "/images/profile.jpg"} alt="post_image" />
      <div className='p-2'>
        {likedetails()}
        <div className='flex overflow-hidden p-2 border-t border-gray-700'>
          <div onClick={likeHandler} className='p-2 grow flex justify-center  cursor-pointer hover:bg-gray-600 rounded'>
            {ownLike ? <><AiFillLike className={`text-2xl text-blue-500`} /><span className=' text-blue-500 font-semibold'>Like</span></> :
              <><AiOutlineLike className={`text-2xl`} /><span>Like</span></>
            }
          </div>
          <div onClick={() => setAddComment(!addComment)} className='grow flex justify-center items-center cursor-pointer hover:bg-gray-600 rounded'>
            <FaRegCommentAlt className='text-xl' /><span> Comment</span>
          </div>
        </div>

        {addComment && <form onSubmit={handleSubmit(commentHandler)} className='border-t border-gray-700 flex p-4 items-center ' >
          <img src="/images/profile.jpg" alt="profile" className='w-10 h-10 rounded-3xl mr-1' />
          <input {...register("comment")} className=' focus:outline-none p-2 rounded-3xl w-full text-white  text-left bg-gray-700' placeholder='Write a comment...' />
        </form>}

        {
          commentSectionShower &&
          commentSection.map((commenter, index) => {
            return (
              <div className='max-w-full flex mt-2 ' key={index}>
                <img className='w-8 h-8 rounded-3xl mx-2' src={`http://localhost:8000/${commenter.userId.profile_picture}`} alt="" />
                <div className='  break-words  flex flex-wrap flex-col bg-gray-700 px-2 rounded-md'>
                  <div className=' font-semibold'>{commenter.userId.firstname + " " + commenter.userId.lastname}</div>
                  <div className=''>{commenter.comment}</div>
                </div>
              </div>
            )
          })

        }
      </div>
    </div>
  )
}

export default PostCard