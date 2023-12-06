import React from 'react'
import { Link } from 'react-router-dom'

export default function DashList() {
    // you will need something like class.title to show and class.id to navigate
  return (
    <div className= ' shadow-lg h-[40px] w-[500px] bg-white-600 border-b-4 border-slate-500/75 ... rounded-md mr-[900px] pb-8 hover:bg-gradient-to-r from-blue-400 via-cyan-700 to-cyan-500 ... hover:scale-110 ...  '>
       <Link to={`/classes/:id`}>
         <p className=' hover:underline ... capitalize ... italic  hover:font-bold ...'>DashList</p>
         </Link>
       
    </div>
  )
}


