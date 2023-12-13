import React from 'react'
import EditCourse from './EditCourse'
import Delete from './Delete'
import { UserContext } from './context/contex'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Enroll from './enroll'

export default function DashClass() {
  const {courses,user} = useContext(UserContext)
  const {id} = useParams()
 
  let course = courses.find(c =>c.id === parseInt(id) )
 
 


 if(course){
  return (
    <div className='flex h-screen w-screen justify-center pl-[400px] pt-8  bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... '>
    <div className='bg-white w-[500px] h-[335px] m-[20px] shadow-2xl rounded-lg border border-slate-300' >
       <div className=' rounded-lg  text-center bg-zinc-200 border-2 bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ...  ' >
         <h2  >{course.title}</h2>
       </div>
     
       <div className='h-[140px] w-[268px] bg-white  ' >
         <div className='mb-[20px] font-semibold'>
           <p>Date: {course.date}  </p>
         </div>

         <div className=''>
          <p className='text-center... hyphens-auto ... pb-10 max-w-[480px] max-h-[480px] '>{course.description}</p>
          </div>
           <div className='fixed '>
           <p className='font-semibold'>Location: {course.location}</p>
           <p className=' h-[30px] font-semibold  '>Price: {course.price}</p>
          </div>
        </div>
          {user.id === course.teacher_id? <div className=' mt-[130px] rounded-lg flex bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ... '>
          {user.entryable_type === "Teacher"? <EditCourse course={course}/> : null}
          {user.entryable_type === "Teacher"? <Delete idd={course.id}/> : null}
        

        
         </div> : null}
         <div className=' mt-[130px] rounded-lg flex bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ... '>
         <Enroll clase={course}/> 
        </div>
    </div>
    </div>
    
  )}
}
// text-center bg-zinc-200 border-2 border-b-slate-500
// h-[160px] w-[268px] bg-sky-100 
// bg-blue-500 h-6