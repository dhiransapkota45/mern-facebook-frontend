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
  useEffect(() => {
    const fetcher = async () => {
      const responseRaw = await fetch(`${BaseURL}/user/peopleyoumayknow/${localStorage.getItem("userId")}`)
      const response = await responseRaw.json()
      console.log(response);
      setPeopleKnow(response.response)
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

  return (
    <div>
      <div className=' font-semibold text-lg mt-2'>
        People You may know
      </div>
      <div>
        {
          peopleKnow.map((user) => {
            return (
              <UserShower setAddFriendHandler={setAddFriendHandler} user={user} key={user._id} />
            )
          })
        }
      </div>
      <div className='font-semibold text-lg mt-4'>
        Friend Requests
      </div>
    </div>
  )
}

export default People