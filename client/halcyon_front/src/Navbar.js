import React, { useContext } from "react";
import { UserContext } from "./context/contex";
import { NavLink } from "react-router-dom";
import index from "./index.css"


export default function Navbar() {
    const {logout,loggedin} = useContext(UserContext)

    function logMeOut(){
        fetch("http://localhost:3000/logout", { 
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
        })
        .then( ()=>{
             logout()
            
        })
     }
 if(loggedin){
  return (
    <div className="w-screen h-6 bg-slate-700 " >
    <div className=" pl-[200px] bg-slate-700">
    <NavLink
          to="/"
          end
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              margin: "0px 900px 10px",
              width: "20px",
              height:"1px",
              padding: "0px",
              fontSize:"10px",
            
              
              
              color: isActive ? "red" : "red",
              textDecoration: isActive ? "underline" : "none"
            };
          }}
          
         onClick={logMeOut}>
           <> Logmeout </>
        </NavLink>
        </div>
        </div>
  )
 }
}
