import React from 'react'
import Post from './Post'
import Videos from './Videos'
import People from './People'

import { Routes, Route } from "react-router-dom"
const PostPage = () => {
  return (
    <div className=' flex-1 overflow-y-auto flex justify-center bg-gray-900 text-white '>
      <div className=' w-1/2'>
        <Routes>
          <Route path='' element={<Post />} />
          <Route path='videos' element={<Videos />} />
          <Route path='people' element={<People />} />
        </Routes>
      </div>
    </div>
  )
}

export default PostPage