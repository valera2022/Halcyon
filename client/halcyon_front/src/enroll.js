import React from 'react'
import { UserContext } from './context/contex'
import { useContext} from 'react'
import useIdentity from './custom_hooks/useIdentity'

export default function Enroll({clase}) {
    const {isStudent} = useIdentity()
    const {user,createEnrollment,deleteEnroll} = useContext(UserContext)
    console.log(clase)

    // const [isEnroll,setEnroll]= useState("enroll")
   

   
     const data ={
        course_id: clase.id
     }
    function handleClick(e){
        e.preventDefault()
        createEnrollment(data)
  
     
        
       

    }
    
   //entryable id and id are not the same. enrollments are referring to the entrybale id in their user_id
    const studentEnrollment = clase.enrollments.find(c=> c.student_id === user.entryable_id)
    console.log(studentEnrollment)
    
    function handleDis(e){
        e.preventDefault()
        console.log(studentEnrollment)
        deleteEnroll(studentEnrollment)
      

    }

  
  return (
    <div>
       
       
        { studentEnrollment !== undefined && isStudent()  ? <button  onClick={handleDis} className=' ml-[90px] rounded-md bg-green-600 h-[40px] w-[100px] pb-[10px] py-2  text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Disenroll</button> : <button   onClick={handleClick} className=' ml-[90px] rounded-md bg-green-600 h-[40px] w-[100px] pb-[10px] py-2  text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Enroll</button> }

        
    </div>
  )
}
