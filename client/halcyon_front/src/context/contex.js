import { useState, useEffect } from "react";
import React from "react";
import { Navigate, unstable_usePrompt, useNavigate } from "react-router-dom";


const UserContext = React.createContext();

function UserProvider ({children}){
    const [courses,setCourses] = useState([])
    const [coursesErrors,setCourseErrors] = useState([])
    const [user, setUser] = useState({})
    const [loggedin, setLoggedin] = useState(false)
    
    const navigate = useNavigate()
    console.log(user)

    const login = (newUser) => {
        setUser(newUser)
        setLoggedin(true)
        fetchCourses()

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
                    console.log(data)
                    console.log("auto login")
                //    let filteredDeleted = courses.map(c => {
                //         let updatedCourseUser = data.classes.filter(cla => cla.id === c.id)
                //         // setUser( updatedCourseUser)
                //    })
                //    let filterDeleted = data.classes.filter(c=> c.id !== null)
                //    console.log(filterDeleted)
                   setUser(data)
                  
                   
                    setLoggedin(true)
                    fetchCourses()
                }



            })
    }, [])

    function fetchCourses() {
        fetch("/classes")
            .then(res => res.json())
            .then(data => {

                console.log(data)

                setCourses(data)





            })


    }

    function createCourse(clas){
        console.log(clas)
        fetch("/classes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(clas)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    console.log(data)
                    setCourses([...courses, data])
                    navigate("/dash")


                }
                else {
                    // setPitches(pitches)
                    console.log(data.errors)
                    // const mistakes = data.errors.map(e => <li>{e}</li>)
                    setCourseErrors(data.errors)


                }

            })
    }

    function patchCourse(formData){
        console.log(formData.title)
        fetch(`/classes/${formData.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
             

            },
            body: JSON.stringify( formData)
        })
        .then(res=> res.json())
        .then(data => {
             if(!data.errors){
                console.log(data)
                // const foundCourse = courses.find(c=> c.id === formData.id)
                let editedCourse =courses.map((c)=>{
                    if (c.id === data.id){
                          return data
                    }
                    else {
                        return c
                    }
                })

                setCourses(editedCourse)
                // let updatedCourse = { ...foundCourse, courses: editedCourse}
                // courses.map(c=>{})
               


             }
             else{
                setCourseErrors(data.errors)
             }
           
        }
        )
    }
              function deleteCourse(id){
                console.log(id)
                   fetch(`/classes/${id}`,{
                    method:"DELETE",
                    headers:{"Content-Type" : "applicaton/json"},
                    body: JSON.stringify()
                   })
                   .then((r)=>{
                    let filtered = courses.filter( course => course.id !== id)
                    setCourses(filtered)
                    
                
                    console.log("deleting..")
                    navigate("/dash")

                   } )
                  
              }

              function createEnrollment(id){
                    fetch("/enroll",{
                        method: "POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(id)
                    })
                    .then(res=> res.json())
                    .then(data=> console.log(data))

              }

              function deleteEnroll(data){
                console.log(data)
                fetch(`/enroll/${data.id}`,{
                    method:"DELETE",
                    headers:{"Content-Type" : "applicaton/json"},
                    body: JSON.stringify(data.id)
                   })
                   .then((r)=>{
                    // let filtered = courses.filter( course => course.id !== id)
                    // setCourses(filtered)
                    
                
                    // console.log("deleting..")
                    // navigate("/dash")

                   } )

              }
    

    return (
        <UserContext.Provider value={{ deleteEnroll, createEnrollment, user,login,loggedin,logout,createCourse,coursesErrors,courses,patchCourse,deleteCourse }}>
            {children}
        </UserContext.Provider>
    );


}

export { UserContext, UserProvider };