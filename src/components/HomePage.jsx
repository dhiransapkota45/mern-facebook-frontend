import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import Videos from './Videos'
import { Routes, Route } from "react-router-dom"
import PostPage from './PostPage'
import { useContext } from "react"
import { NewContext } from '../context/context'
import Modal from './Modal'
import { useState } from 'react'
import { NewContext2 } from '../context/context'
const HomePage = () => {

  const context1 = useContext(NewContext)

  const { openModal, BaseURL } = context1

  const [user1, setUser1] = useState()

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.authToken) {
      navigate("/login")
    }

    const fetchUser = async () => {
      const responseRaw = await fetch(`${BaseURL}/user/getuser/${localStorage.getItem("userId")}`)
      const response = await responseRaw.json()
      console.log(response);
      setUser1(response.getUser)
    }

    fetchUser()

  }, [])

  return (
    <>
      <NewContext2.Provider value={{user1, setUser1}}>
        <div className='flex flex-col h-screen'>
          <Navbar className="" />
          {/* <Routes>
          <Route path='' element={<PostPage />} /> 
          <Route path='videos' element={<Videos />} />
        </Routes> */}
          <PostPage />
        </div>
        <div>{openModal && <Modal />}</div>
      </NewContext2.Provider>
    </>
  )
}

export default HomePage