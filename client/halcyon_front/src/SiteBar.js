import React from 'react'
import SideIcon from './SideIcon'
import { VscAccount,VscBook, VscArchive,VscAdd } from "react-icons/vsc";

import { Link } from 'react-router-dom';
import { UserContext } from './context/contex';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';


export default function SiteBar() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  // const ref1 = useRef()
  const {loggedin,user} = useContext(UserContext)

  console.log(user)

  // function handleClick(e){
  //   e.preventDefault()
  //   // navigate("/addcourse")
   


  // }

//    function show1(){
//       ref1.current.showModal()
//    }
//    function hide1(){
//     ref1.current.close()
//  }
function handleM1(e){
  console.log(e)
  switch (e) {
    case 'profile':
      setIsShown(true)
       
      break;
    case 'dash':
       setIsShown2(true)
       break;
    case 'folder':
       setIsShown3(true)
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case 'add':
       setIsShown4(true)
       break;
    default:
      ;
  }
  
  
   
}
function handleC1(e){
  switch (e) {
    case 'profile':
      setIsShown(false)
       
      break;
    case 'dash':
       setIsShown2(false)
       break;
    case 'folder':
       setIsShown3(false)
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case 'add':
       setIsShown4(false)
       break;
    default:
      ;
  }
  
}

   if(loggedin){
  return (
    <div className="fixed top-0 h-screen w-16 m-0
    flex flex-col bg-gradient-to-l from-lime-600 via-lime-400 to-lime-300 ... text-white shadow-lg">
        <Link onMouseEnter={()=> handleM1("profile")} onMouseLeave={()=> handleC1("profile")} to="/profile"> <SideIcon icon={<VscAccount  size="30" color="white" />}/> </Link>
         {isShown? <div className=' text-center ml-3 text-xs rounded-sm bg-fire h-[20px] w-[40px]'>Profile</div> : null}
         
        <Link onMouseEnter={()=> handleM1('dash')} onMouseLeave={()=> handleC1('dash')} to="/dash"><SideIcon icon={<VscBook size="30" color="white" />}/></Link>
        {isShown2? <div className='text-center ml-3 text-xs rounded-sm bg-fire h-[20px] w-[40px]'>Dash</div> : null}
       
        {/* <SideIcon icon={<VscInbox size="30" color="white" />}/> */}
       
        <Link  onMouseEnter={()=> handleM1('folder')} onMouseLeave={()=> handleC1('folder')} to="/myClasses"><SideIcon icon={<VscArchive size="30" color="white" />}/></Link>
        {isShown3? <div className='text-center ml-3 text-[7px] rounded-sm bg-fire h-[20px] w-[40px]'>My-Classes </div> : null}

       {user.entryable_type === "Teacher"? <Link onMouseEnter={()=> handleM1('add')} onMouseLeave={()=> handleC1('add')} to="/addcourse"><SideIcon  icon={<VscAdd  size="25" color="white" />}/></Link> : null} 
       {isShown4? <div className=' text-center ml-3 text-xs rounded-sm bg-fire h-[20px] w-[40px]'>Add</div> : null}

        
    
    
    </div>
  )}
  else {
    <h1>NOT AUTHORIZED</h1>
  }
}
