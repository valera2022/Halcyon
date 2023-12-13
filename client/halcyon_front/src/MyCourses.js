import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/contex'
import { useContext } from 'react'



export default function MyCourses() {
  const{user}= useContext(UserContext)
  return (
    <div className=' flex h-screen w-screen justify-center pl-[400px] pt-8  bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... '>
        <div>
        {user.entryable_type === "Student"?<h1>Enrolled In:</h1> : <h1>Created Courses:</h1> }
        <br></br>
       
        
     
        
        {/* <p >{u.title}</p> */}
        {/* <ul className=' hover:underline ... capitalize ... italic  hover:font-bold ...'> */}
          {user.classes.map(u=> 
           <div className= ' shadow-lg h-[40px] w-[500px] bg-white-600 border-b-4 border-slate-500/75 ... rounded-md mr-[900px] pb-8 hover:bg-gradient-to-r from-blue-400 via-cyan-700 to-cyan-500 ... hover:scale-110 ...  '>
             <Link to={`/classes/${u.id}`}>
           <ul className=' hover:underline ... capitalize ... italic  hover:font-bold ...'> <li>{u.title}</li>  </ul>
            </Link>
             </div>)}
        {/* </ul> */}
        
       
       
   
        </div>
       
       
    </div>
  )
}
