import React, { useState, useContext } from "react";
import { UserContext } from "./context/contex";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Login() {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const { login, loggedin } = useContext(UserContext);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    let formData = {

      password: password,
      username: username


    }
    console.log("ok")

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          console.log(data)
          login(data)
          navigate("/dash")
        }
        else {

          setPassword("")
          setUsername("")


          setError(data.error)
        }
      })






  }




  if (!loggedin ) {

  
  return (
    // border  border-indigo-600 relative ...


    <div className="h-[10000px] pt-14 pl-[500px]  w-full bg-gradient-to-r from-amber-500 via-yellow-300 to-pink-500 ... ">
      <div className="  ">
        <div className=" ml-[100px] justify-center absolute border  border-indigo-600 mt-10 w-[160px] h-[300px] shadow-xl ">
          <h1 className="  text-base  font-semibold leading-7 text-gray-900 pl-[55px] pb-4 ">login</h1>
          <form onSubmit={handleSubmit}>



            <label for="username" class="  pl-[45px] block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div className="mt-2 a pl-6" >
              <input className="  block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-6 w-24" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <br></br>




            <label for="password" class="  pl-[45px] block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2 pl-6">
              <input className=" h-6 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[100px] mb-2" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="pl-6 pt-8">
              <button type="submit" className="rounded-md bg-indigo-600 w-[100px]  py-2  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</button>
            </div>

               <div className=" mt-2 text-xs text-cyan-700"> <Link to="/signup">Are you a new Student ? Sign Up</Link> </div>




          </form>
        </div>
        <ul>
          {error}
        </ul>
      </div>
    </div>

  )}


}


export default Login
