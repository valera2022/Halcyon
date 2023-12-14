import React from 'react'

export default function Errors({error}) {
  return (
    <div className=' flex'>
         {/* <li className="flex"> */}
         <ul>
             <li className='text-red-600 sha' >{error}</li>
        </ul>
         {/* </li> */}
    </div>
  )
}
