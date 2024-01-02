import React from 'react'
import DashClass from './DashClass'
import DashList from './DashList'
import { UserContext } from './context/contex'
import { useContext } from 'react'
import Search from './Search'
import { useState } from 'react'
// import Logo from './Logo'


export default function DashBoard() {
  const {courses} = useContext(UserContext)
  const [search,setSearch] = useState("")

  const itemsToDisplay = courses.filter((data) => {
    // debugger;
  
    console.log(data)
    if(search === ""){
      return courses

    }
    else{
      return data.title.toLowerCase().includes(search.toLowerCase()) 

    }
      
    
      
  })
  

  console.log(courses)
 
  return (
  
    <div className=' flex h-screen w-screen justify-center pl-[400px] pt-8  bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... '>
        <div className=' fixed  pt-[-50px] ml-[200px]'><Search search={search} setSearch={setSearch}/>
        </div>
       {/* space-x or space-y add distance in right/left or t/b in flex container among flex items */}
       <div className="grid-flow-row justify-end space-y-6 pt-10  "> 
       {itemsToDisplay.map((course)=><DashList course={course}/>)}
       </div>

    </div>
  )
}
