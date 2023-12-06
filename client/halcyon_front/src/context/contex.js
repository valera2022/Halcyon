import { useState, useEffect } from "react";
import React from "react";
import {forwardRef, useImperativeHandle, useRef} from 'react';

const UserContext = React.createContext();

function UserProvider ({children}){
    const [courses,setCourses] = useState()
    const [user, setUser] = useState(null)
    const [loggedin, setLoggedin] = useState(false)

    console.log(user)

    const login = (newUser) => {
        setUser(newUser)
        setLoggedin(true)
        // fetchPitches()

    }

    const logout = () => {

        setLoggedin(false)
        setUser({})



    }

    useEffect(() => {
        fetch("/me")
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    console.log("auto login")

                    setUser(data)
                    setLoggedin(true)
                    fetchCourses()
                }



            })
    }, [])

    function fetchCourses() {
        fetch("/courses")
            .then(res => res.json())
            .then(data => {

                console.log(data)

                setCourses(data)





            })


    }

    return (
        <UserContext.Provider value={{  login,loggedin,logout }}>
            {children}
        </UserContext.Provider>
    );


}

export { UserContext, UserProvider };