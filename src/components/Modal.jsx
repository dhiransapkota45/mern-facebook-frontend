import { useContext } from 'react'
import { NewContext } from "../context/context"
import { AiOutlineClose } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { useState } from 'react'

const Modal = () => {
  const { setOpenModal, BaseURL } = useContext(NewContext)
  const [post, setPost] = useState()

  const { register, handleSubmit } = useForm()

  const onSubmitHandler = async (data) => {
    const { description} = data
    const postDetails = new FormData()
    postDetails.append("description", description)
    postDetails.append("post", post)
    console.log(postDetails);
    const responseRaw = await fetch(`${BaseURL}/user/post/${localStorage.getItem("userId")}`, {
      method: "POST",
      body: postDetails
    })
    const response = await responseRaw.json()
    console.log(response);
  }

  return (
    <>
      <div className='w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-black/50'>
        <form className='w-2/5 bg-gray-700 p-4 text-white rounded-md' onSubmit={handleSubmit(onSubmitHandler)}>
          {/* header */}
          <div className='flex justify-center relative my-3'>
            <div>Create Post</div>
            <div className=' absolute right-0 bg-gray-500 rounded-2xl p-2 cursor-pointer' onClick={() => { setOpenModal(false) }}><AiOutlineClose /></div>
          </div>

          {/* userdetails */}
          <div className='flex items-center mb-3'>
            <img src="/images/profile.jpg" alt="profile" className='w-10 h-10 rounded-3xl mr-4' />
            <div>Username</div>
          </div>

          <div className='mb-3'>
            <textarea
              {...register("description")}
              placeholder="What's on your mind, Username?"
              className=' h-20 resize-none overflow-auto w-full bg-gray-700 focus:outline-none' cols="30" rows="10" />
          </div>
          <div>
            <input type="file" name='post' onChange={(e) => { setPost(e.target.files[0]) }} />
          </div>
          <div>
            <button type='submit' className='w-full bg-blue-500 rounded p-2 text-white font-semibold hover:bg-blue-400'>Post</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Modal