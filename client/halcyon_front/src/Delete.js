import React, { useRef } from 'react'

export default function () {
    const diagRef = useRef()

    function handleClickDelete(e){
        e.preventDefault()
        //send data to context to delete class
        diagRef.current.close()
        
    }

    function openModal(){
        diagRef.current.showModal()

    }
    function closeModal(){
        diagRef.current.close()
        
    }




  return (
    <div>
        <dialog ref={diagRef}>
            <h1>Are You Sure You Want To Delete This Class?</h1>

              <div className='flex space-x-20'>
                <div>
                  <button onClick={handleClickDelete} className="rounded-md bg-red-600 w-[100px] h-[40px] py-2   text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
                </div>
                <div>
                <button onClick={closeModal} className="rounded-md bg-blue-600 w-[100px] h-[40px] py-2   text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Cancel</button>
                </div>
              </div>



        </dialog>
        <button className="rounded-md bg-red-600 w-[100px] h-[40px] py-2   text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={openModal}>Delete</button>
    </div>
  )
}
