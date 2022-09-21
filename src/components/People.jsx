import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
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
  return (
    <div>
      <div className=' font-semibold text-lg mt-2'>
        People You may know
      </div>
      <div>
        {
          peopleKnow.map((user) => {
            return (
              <UserShower user={user} key={user._id} />
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