-import React from 'react'
import { useRef } from 'react'
import { UserContext } from './context/contex'
import { useContext } from 'react'
import useIdentity from './custom_hooks/useIdentity'

export default function EnrolledStudents({curso}) {
    const dialogRef = useRef()
    const {isTeacher} = useIdentity()
    

    function closeM(){
        dialogRef.current.close()

    }
    function openM(){
   
        dialogRef.current.showModal()

    }
  return (
    <div>
         <dialog className='rounded-lg' ref={dialogRef}>
            <div className='h-[400px] w-[250px] rounded-lg shadow-md  bg-gradient-to-r from-cyan-500 to-blue-500 ...'> 
                <div className='pt-2'>
                <h1> Enrolled Students : </h1> 
                    <ul>{curso.students.map(student=><li key={student.id}>{student.name}</li>)}</ul>
                   
                
               </div>
             <button className=' w-[100px] mt-[330px] rounded-md bg-red-600  py-2  text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600' onClick={closeM}>close</button>
              
            </div>
        </dialog>
        {isTeacher() ? <button onClick={openM} className="  ml-[90px] rounded-md bg-green-600 h-[40px] w-[90px] pb-[10px] py-2  text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrolled Students</button> : null}
    </div>
  )
}
