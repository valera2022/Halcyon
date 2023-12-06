import React from 'react'
import SideIcon from './SideIcon'
import { VscAccount,VscBook,VscInbox, VscArchive,VscAdd } from "react-icons/vsc";
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from './context/contex';
import { useContext } from 'react';


export default function SiteBar() {
  const {loggedin} = useContext(UserContext)
  const navigate = useNavigate()
  function handleClick(e){
    e.preventDefault()
    // navigate("/addcourse")
   


  }
   if(loggedin){
  return (
    <div className="fixed top-0 h-screen w-16 m-0
    flex flex-col bg-gradient-to-l from-lime-600 via-lime-400 to-lime-300 ... text-white shadow-lg">
        <Link to=""><SideIcon icon={<VscAccount  size="30" color="white" />}/></Link>
        <Link to="/dash"><SideIcon icon={<VscBook size="30" color="white" />}/></Link>
        <SideIcon icon={<VscInbox size="30" color="white" />}/>
        <SideIcon icon={<VscArchive size="30" color="white" />}/>
        <Link to="/addcourse"><SideIcon  icon={<VscAdd  size="25" color="white" />}/></Link>
        {/* sending icons from parent make sure every get css applied from child */}

        
    
    
    </div>
  )}
  else {
    <h1>NOT AUTHORIZED</h1>
  }
}
