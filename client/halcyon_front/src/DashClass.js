import React from 'react'
import EditCourse from './EditCourse'
import Delete from './Delete'

export default function DashClass() {
  function handleClick(){
    alert("You just deleted this class")
  }
  return (
    <div className='flex h-screen w-screen justify-center pl-[400px] pt-8  bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... '>
    <div className='bg-white w-[300px] h-[235px] m-[20px] shadow-2xl rounded-lg border border-slate-300' >
       <div className=' rounded-lg  text-center bg-zinc-200 border-2 bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ...  ' >
         <h2  >Title:</h2>
       </div>
     
       <div className='h-[140px] w-[268px] bg-white ' >
         <p>Date:  </p>
          <p className='text-center pb-12'>about:</p>
          <p>Location:</p>
        </div>
        <p className='bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ...  h-[32px]  '>price:</p>
         <div className='flex bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ... '>
          <EditCourse/>
          <Delete/>

         {/* <button className=" mr-[100px] rounded-md bg-blue-600 w-[100px]  py-2  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</button> */}
         {/* <button onClick={handleClick} className="rounded-md bg-red-600 w-[100px] h-[40px] py-2   text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button> */}
         </div>
    </div>
    </div>
    
  )
}
// text-center bg-zinc-200 border-2 border-b-slate-500
// h-[160px] w-[268px] bg-sky-100 
// bg-blue-500 h-6