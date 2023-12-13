import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import { UserContext } from './context/contex';

export default function Profile() {
  const {user}= useContext(UserContext)
  return (
<div className=" flex justify-center  items-center h-[800px] w-full bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... ">
   
       <div className=' absolute border border-indigo-600  h-[200px] w-[200px] rounded-md shadow-lg '>
        <FaRegUserCircle size="50" />
        <div className='mt-4'>
          <p >Name: {user.name}</p> <p>Username: {user.username}</p>      
        </div>
      </div>
    
</div>
  )
}
