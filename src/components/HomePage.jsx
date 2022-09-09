import React, { useEffect } from 'react'
import  {useNavigate} from "react-router-dom"
import Navbar from './Navbar'
import Videos from './Videos'
import {Routes, Route} from "react-router-dom"
import PostPage from './PostPage'

const HomePage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.authToken){
            navigate("/login")
        }
    }, [])
  return (
    <div className=''>
        <Navbar /> 
        <Routes>
          <Route path='' element={<PostPage />} />
          <Route path='videos' element={<Videos />}/>
        </Routes>
        
    </div>
  )
}

export default HomePage