// import React from 'react'
import { useState ,useContext, useRef} from 'react'
import { UserContext } from './context/contex';
import Errors from './errors';

export default function EditCourse({course}) {
    const editRef = useRef();
     const [title, setTitle] = useState(course.title);
     const [description, setDescription] = useState(course.description);
     const [date, setDate] = useState(course.date);
     const [location, setLocation] = useState(course.location);
     const [price, setPrice] = useState(course.price);
     const {coursesErrors,patchCourse}= useContext(UserContext)
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
          price: price,
          id: course.id
     }

     function handleSubmit(e){
           e.preventDefault()
           //send data to context
           patchCourse(formData)
           editRef.current.close()
          
     }

     function openModal(){
        editRef.current.showModal()
     }
     function closeModal(){
        editRef.current.close()
     }


     return (
          // pt-[100px] pl-[600px]
          < >
              <dialog id="dialog" ref={editRef}>
               <form onSubmit={handleSubmit} method="dialog">
                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-lg  shadow-xl w-[300px] h-[500px] border 6 border-indigo-600 '>
                    <h1 className='  text-base  font-semibold leading-7 text-gray-900 pl-[90px]  pb-4 '>Edit Course</h1>
                         <div className='pl-4'>  
                              <label >Title</label>
                              <br></br>
                              <input className="rounded-md border-2 border-slate-400"type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                         </div>
                         <br></br>
                         <div className='pb-3 pl-4 '>
                              <label >Description</label>
                              <br></br>
                              <div className='overflow-auto...'>
                              <input className="  resize placeholder:text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-400 rounded-md border-2 border-slate-400 pb-6" type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                              </div>
                         </div >
                         <div className='pb-3 pl-4'>
                              <label >Date</label>
                              <br></br>
                              <input className='rounded-md border-2 border-slate-400' type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                         </div>
                         <div className='pb-3 pl-4'>
                              <label >Location</label>
                              <br></br>
                              <input className="rounded-md border-2 border-slate-400" type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} />
                         </div>
                         <div className='pb-16 pl-4'>
                              <label >Price</label>
                              <br></br>
                              
                              <input className='rounded-md border-2 border-slate-400' type="string" name="price" value={ price} onChange={e => setPrice(e.target.value)} />
                         </div>
                         <div className='pl-20 flex space-x-4 ...'>
                          <div>
                         <button className='rounded-md bg-indigo-600 w-[100px]   py-2 pr-2  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"' type="submit" formmethod="dialog">Submit</button>
                         </div>
                         <div>
                         <button className='rounded-md bg-red-600 w-[100px]  py-2  text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'onClick={closeModal}>Cancel</button>
                         </div>
                         </div>
                        
                    </div>
               </form>
               {/* <div>
                 {coursesErrors.map(c=><Errors error={c}/>)}
               </div> */}
               
               </dialog>
               <button onClick={openModal} className=" mr-[100px] rounded-md bg-blue-600 w-[100px]  py-2  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</button>
              
          </>
     )
}

