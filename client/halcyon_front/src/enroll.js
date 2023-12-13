import React from 'react'
import { UserContext } from './context/contex'
import { useContext,useRef,useState } from 'react'

export default function Enroll({clase}) {
    const [isEnroll,setEnroll]= useState(false)
    console.log(clase)
    const dialogRef = useRef()
    const {user,createEnrollment,deleteEnroll} = useContext(UserContext)

    // const [isEnroll,setEnroll]= useState("enroll")
   

    function closeM(){
        dialogRef.current.close()

    }
    function openM(){
   
        dialogRef.current.showModal()

    }
     const data ={
        course_id: clase.id
     }
    function handleClick(e){
        e.preventDefault()
        createEnrollment(data)
        setEnroll(true)
     
        
       

    }
    
   //entryable id and id are not the same. enrollments are referring to the entrybale id in their user_id
    let enrolledStudent = clase.enrollments.find(c=> c.student_id === user.entryable_id)
    console.log(enrolledStudent)
  
    function handleDis(e){
        e.preventDefault()
        deleteEnroll()
        setEnroll(false)

    }


  return (
    <div>
       
        <dialog className='rounded-lg' ref={dialogRef}>
            <div className='h-[400px] w-[250px] rounded-lg shadow-md  bg-gradient-to-r from-cyan-500 to-blue-500 ...'> 
                <div className='pt-2'>
                <p> Enrolled Students : 
                    <ul>{clase.students.map(student=><li>{student.name}</li>)}</ul>
                   
                </p> 
               </div>
             <button className=' w-[100px] mt-[330px] rounded-md bg-red-600  py-2  text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600' onClick={closeM}>close</button>
              
            </div>
        </dialog>
        { enrolledStudent  ? <button onClick={handleDis} className=' ml-[90px] rounded-md bg-green-600 h-[40px] w-[100px] pb-[10px] py-2  text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Disenroll</button> : <button onClick={handleClick} className=' ml-[90px] rounded-md bg-green-600 h-[40px] w-[100px] pb-[10px] py-2  text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Enroll</button> }

        { user.entryable_type === "Teacher" ? <button onClick={openM} className="  ml-[90px] rounded-md bg-green-600 h-[40px] w-[100px] pb-[10px] py-2  text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrolled Students</button> : null}
    </div>
  )
}
