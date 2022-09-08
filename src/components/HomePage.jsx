import React, { useEffect } from 'react'
import  {useNavigate} from "react-router-dom"
const HomePage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.authToken){
            navigate("/login")
        }
    }, [])
  return (
    <div>This is HomePage</div>
  )
}

export default HomePage