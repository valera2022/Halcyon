import React, { useState,useContext } from "react";
import { UserContext } from "./context/contex";
import { useNavigate } from "react-router-dom";

function Signup (){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [lastName, setLastname] = useState("")
    const [dob, setDob] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList,setErrorsList] = useState([])
    const {signup,loggedin} = useContext(UserContext);

    let navigate = useNavigate()
   
  
  
   
    
  
   
  
    function handleSubmit(e) {
      e.preventDefault()
      let formData = {
        name: name,
        password: password,
        username: username,
        password_confirmation: passwordConfirmation,
        last_name: lastName,
        dob: dob
       
      }
      
      fetch("/signup",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      .then(res=> res.json())
      .then(data=> {
           if(!data.errors){
             signup(data)
             navigate("/dash")
             setName("")
             setPassword("")
             setUsername("")
             setPasswordConfirmation("")
           }
           else {
           
           
            const errors = data.errors.map(e => <li>{e}</li>) 
            setErrorsList(errors)
           }
      })
  
      
  
  
  
  
    }
   if(!loggedin){
    return (
      <div className=' flex h-screen w-screen justify-center pl-[400px] pt-8  bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... '>
        <div className='mr-[450px] rounded-lg  shadow-xl w-[300px] h-[500px] border 6 border-indigo-600 '>
        <form onSubmit={handleSubmit}>
        <div className='pl-4'>
                              <h1 className='  text-base  font-semibold leading-7 text-gray-900 pl-[90px]  pb-4 '>Sign UP</h1>
                              <label >Name</label>
                              <br></br>
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="text" name="name" value={name} onChange={e => setName(e.target.value)}  />
         </div>
          
          <br></br>
          <div className='pl-4'>
                             
                              <label >Username</label>
                              <br></br>
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
         </div>
         <br></br>
         <div className='pl-4'>
                          
                              <label >Last Name</label>
                              <br></br>
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="text" name="name" value={lastName} onChange={e => setLastname(e.target.value)}  />
         </div>

          
          <br></br>
         
          <div className='pl-4'>
                             
                              <label >DOB</label>
                              <br></br>
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="date" name="username" value={dob} onChange={e => setDob(e.target.value)} />
         </div>
          <br></br>
          <div className='pl-4'>
                              
                              <label >Password</label>
                              <p className=" text-[8px]">Password must be bigger than 6 characters and less than 20</p>
                              
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
         </div>
          
          <br></br>
          <div className='pl-4'>
                              
                              <label >Confirm Password</label>
                              <br></br>
                              <input className=" ring-1 ring-inset ring-gray-300  rounded-md border-2 border-slate-400" type="password" name="passwordconfirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
         </div>
         
          <br></br>
          <div className="pt-10 pl-20">
          <button className='rounded-md bg-indigo-600 w-[100px]  py-2  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"' type="submit">Sign Up</button>
          </div>
  
  
        </form>
        <div className='  w-[500px] border-red-900 ml-[320px] mt-[-400px] shadow-md  '>
             
                 <ul>
                   <li className='text-red-600 sha' >  {errorsList}</li>
                 </ul>
             
        </div>
     
        </div>
      </div>)
   }
   else{
    <h1>You are loggedin</h1>
   }

}


export default Signup
