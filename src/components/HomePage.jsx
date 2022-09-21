import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import Videos from './Videos'
import { Routes, Route } from "react-router-dom"
import PostPage from './PostPage'
import { useContext } from "react"
import { NewContext } from '../context/context'
import Modal from './Modal'

const HomePage = () => {

  const context1 = useContext(NewContext)

  const { openModal } = context1

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.authToken) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <div className=''>
        <Navbar />
        {/* <Routes>
          <Route path='' element={<PostPage />} />
          <Route path='videos' element={<Videos />} />
        </Routes> */}
        <PostPage />
      </div>
        <div>{openModal && <Modal />}</div>
    </>
  )
}

export default HomePage