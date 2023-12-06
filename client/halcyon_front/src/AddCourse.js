import React from 'react'
import { useState ,useContext} from 'react'
import { CoursesContext } from './context/coursesContext'

export default function AddCourse() {
     const [title, setTitle] = useState("")
     const [description, setDescription] = useState("")
     const [date, setDate] = useState("")
     const [location, setLocation] = useState("")
     const [price, setPrice] = useState()
     const {createCourse,courseErrors}= useContext(CoursesContext)
      console.log(title)
      console.log(description)
      console.log(date)
      console.log(location)
      console.log(price)
      
     const formData = {
          title: title,
          description: description,
          date: date,
          location: location,
          price: price
     }

     function handleSubmit(e){
           e.preventDefault()
           createCourse(formData)
     }

     return (
          // pt-[100px] pl-[600px]
          <div className='flex justify-center items-center border 2 bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... w-screen  h-screen'>
               <form onSubmit={handleSubmit}>
                    <div className='rounded-lg  shadow-xl w-[300px] h-[500px] border 6 border-indigo-600 '>
                         <div className='pl-4'>
                              <h1 className='  text-base  font-semibold leading-7 text-gray-900 pl-[90px]  pb-4 '>Add Course</h1>
                              <label >Title</label>
                              <br></br>
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400"type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                         </div>
                         <br></br>
                         <div className='pb-3 pl-4 '>
                              <label >Description</label>
                              <br></br>
                              <input className="resize placeholder:text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-400 rounded-md border-2 border-slate-400 pb-6" type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                         </div >
                         <div className='pb-3 pl-4'>
                              <label >Date</label>
                              <br></br>
                              <input className=' ring-1 ring-inset ring-gray-300     rounded-md border-2 border-slate-400' type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                         </div>
                         <div className='pb-3 pl-4'>
                              <label >Location</label>
                              <br></br>
                              <input className="  ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} />
                         </div>
                         <div className='pb-16 pl-4'>
                              <label >Price</label>
                              <br></br>
                              
                              <input className=' ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400' type="string" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                         </div>
                         <div className='pl-20'>
                         <button className='rounded-md bg-indigo-600 w-[100px]  py-2  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"' type="submit">Submit</button>
                         </div>
                        
                    </div>
               </form>
               <ul>{courseErrors}</ul>
          </div>
     )
}
