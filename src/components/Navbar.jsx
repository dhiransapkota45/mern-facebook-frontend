import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { AiOutlineHome, AiFillHome } from "react-icons/ai"
import { HiOutlineVideoCamera } from "react-icons/hi"
import { IoVideocam } from "react-icons/io5"
import { HiUserGroup } from "react-icons/hi"
import { SiFacebookgaming } from "react-icons/si"
import { IoApps } from "react-icons/io5"
import { FaFacebookMessenger } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import {Link} from "react-router-dom"

const Navbar = () => {
    // const initialState = {
        // option1: false,
        // option2: false,
        // option3: false,
        // option4: false,
    // }
    // const [active, setActive] = useState({
    //     option1: false,
    //     option2: false,
    //     option3: false,
    //     option4: false,
    // });
    // const activeHandler = (e) => {
    //     console.log(e.target);
    //     setActive({ ...active, [e.target.name]: true })
    // }
    // console.log(active);
    return (
        <div className='  flex bg-gray-800 p-3 justify-between'>
            <div className='flex '>
                <img className='w-12 mx-2' src="/images/facebook_logo.webp" alt="" />
                <div className='p-2 flex rounded-3xl bg-gray-700 text-gray-200 items-center '>
                    <BsSearch className='mx-3' />
                    <input className=' bg-gray-700 text-gray-200 focus:outline-none' type="text" name="" id="" placeholder='search facebook' />
                </div>
            </div>
            <div className='text-blue-400 flex text-3xl items-center'>
                <Link to="">
                <AiFillHome name="option1" className='mx-12  cursor-pointer' />
                </Link>
                <Link to="videos">
                <IoVideocam name="option2" className='mx-12  cursor-pointer' /></Link>
                <Link to="people"><HiUserGroup name='option3' className='mx-12 cursor-pointer' /></Link>
                <SiFacebookgaming name='option4' className='mx-12 cursor-pointer' />
            </div>
            <div className='text-white text-2xl items-center flex'>

                <IoApps className='mx-4 cursor-pointer rounded-3xl ' />
                <FaFacebookMessenger className='mx-4  cursor-pointer' />
                <IoIosNotifications className='text-3xl mx-4 cursor-pointer' />

                <img className='w-12 h-12 border-2 rounded-3xl ' src="/images/profile.jpg" alt="profile" />

            </div>
        </div>
    )
}

export default Navbar