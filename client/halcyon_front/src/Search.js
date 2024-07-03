import React from 'react'
// import { useState } from 'react'

export default function Search({search,setSearch}) {
  
 

   
  return (
    
    <div className='pb-[10px] flex flex-row'>
   <form  >
      <input
        type="text"
        id="search"
        placeholder="search class 🔍 "
        value={search}
        onChange={e=>setSearch(e.target.value)}
        className='rounded-md '
        
      />
   
    </form>
    </div>
  )
}
