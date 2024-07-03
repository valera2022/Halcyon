import React from 'react'
import EditCourse from './EditCourse'
import Delete from './Delete'
import { UserContext } from './context/contex'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Enroll from './enroll'
import EnrolledStudents from './enrolledStudents'
import useIdentity from './custom_hooks/useIdentity'
// import Errors from './errors'

export default function DashClass() {
  const { courses, user, loggedin } = useContext(UserContext)
  // my own custom hook
  const { isTeacher, isStudent } = useIdentity()
  const { id } = useParams()

  let course = courses.find(c => c.id === parseInt(id))

//  console.log(course.date)

  
  // Format the date in MM/DD/YYYY format
  
  
  // console.log(usFormattedDate);


  if (course && loggedin) {
    let yourDate = new Date(course.date);
    let usFormattedDate = yourDate.toLocaleDateString('en-US');
    return (
      <div className='flex h-screen w-screen justify-center pl-[400px] pt-8  bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... pr-[400px] '>
        <div className='bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ... w-[500px] h-[335px] m-[20px] shadow-2xl rounded-lg border border-slate-300' >
          <div className=' rounded-lg  text-center bg-zinc-200 border-2 bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ...  ' >
            <h2 className='text-white' >{course.title}</h2>
          </div>

          <div className='h-[140px] w-[268px]  ' >
            <div className='mb-[20px] font-semibold'>
              <p className='text-white'>Date: {usFormattedDate}  </p>
            </div>

            <div className='ml-20 w-[300px] h-[100px] max-w-[680px] max-h-[480px] '>
              <p className=' text-white text-center... hyphens-auto ... mb-10 '>{course.description}</p>
            </div>
            <div className='fixed '>
              <p className=' text-white font-semibold'>Location: {course.location}</p>
              <p className=' text-white font-semibold'>Time: {course.time }</p>
              <p className='text-white h-[30px] font-semibold  '>Price: {course.price}</p>
            </div>
          </div>
          {user.id === course.teacher_id ? <div className=' mt-[130px] rounded-lg flex bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-500 ... '>
            {isTeacher() ? <EditCourse course={course} /> : null}
            {isTeacher() ? <Delete idd={course.id} /> : null}
            {isTeacher() ? <EnrolledStudents curso={course} /> : null}


          </div> : null}
          <div className=' mt-[127px] '>
            {isStudent() ? <Enroll clase={course} /> : null}

          </div>
        </div>
       
      </div>

    )
  }
  else {
    return <h1>Not Authorized</h1>
  }
}
// text-center bg-zinc-200 border-2 border-b-slate-500
// h-[160px] w-[268px] bg-sky-100 
// bg-blue-500 h-6