import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { set } from 'react-hook-form'
import { NewContext } from "../context/context"
import UserShower from './UserShower'


const People = () => {
  const { BaseURL } = useContext(NewContext)
  console.log(BaseURL);
  const [peopleKnow, setPeopleKnow] = useState([])
  const [friendrequest, setFriendrequest] = useState([])
  useEffect(() => {
    const fetcher = async () => {
      const responseRaw = await fetch(`${BaseURL}/user/peopleyoumayknow/${localStorage.getItem("userId")}`)
      const response = await responseRaw.json()

      const responseRaw2 = await fetch(`${BaseURL}/user/friendrequest/${localStorage.getItem("userId")}`)
      const response2 = await responseRaw2.json()
      console.log(response);
      console.log(response2);
      setPeopleKnow(response.response)
      setFriendrequest(response2.response)
    }
    fetcher()
  }, [])

  const setAddFriendHandler = async(e, user) => {
    e.preventDefault()
    console.log(user);
    const responseRaw = await fetch(`${BaseURL}/user/requestsend/${localStorage.getItem("userId")}/${user._id}`, {
      method:"PUT"
    })
    const response = await responseRaw.json()
    console.log(response);
    const filteringData = peopleKnow
    const newdata = filteringData.filter((arrayUser)=>{return arrayUser._id!==user._id})
    console.log(newdata);
    setPeopleKnow(newdata)
  }

  const friendRequestHandler = async(e, user)=>{
    e.preventDefault()
    const responseRaw = await fetch(`${BaseURL}/user/acceptrequest/${user._id}/${localStorage.getItem("userId")}`, {
      method:"PUT"
    })
    const response = await responseRaw.json()
    console.log(response);
    const filteringData = friendrequest
    const newdata = filteringData.filter((arrayUser)=>{return arrayUser._id!==user._id})
    setFriendrequest(newdata)
  }

  return (
    <div>
      <div className=' font-semibold text-lg mt-2'>
        People You may know
      </div>
      <div>
        {
          peopleKnow.map((user) => {
            return (
              <UserShower setFunction={setAddFriendHandler} user={user} key={user._id} btn_text="add friend" />
            )
          })
        }
      </div>
      <div className='font-semibold text-lg mt-4'>
        Friend Requests
      </div>
      <div>
      {
          friendrequest.map((user) => {
            return (
              <UserShower setFunction={friendRequestHandler} user={user} key={user._id} btn_text="Confirm"/>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default People