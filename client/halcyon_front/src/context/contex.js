import { useState, useEffect } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";


const UserContext = React.createContext();

function UserProvider ({children}){
    const [courses,setCourses] = useState([])
    const [coursesErrors,setCourseErrors] = useState([])
    const [user, setUser] = useState({})
    const [loggedin, setLoggedin] = useState(false)
    const [enroll,setEnrollment] = useState({})
    // const [render,setRender]= useState(true)
    
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

      const signup = (data) => {
        setUser(data)
        setLoggedin(true)

    }

    useEffect(() => {
        fetch("/me")
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    console.log(data)
                    console.log("auto login")
                    setLoggedin(true)
                    
                    fetchCourses()
               
                //    console.log(allCourses)
            
                    setUser(data)
                    
                   
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
                    setUser({...user,classes: [...user.classes,data]})
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
    
    //  function patchCourse(formData){
    //     let render 
    //     console.log(formData.title)
     
    //     return render
    // }
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

                    let deletedUserClass = user.classes.filter(c=> c.id !== id)
                    console.log(deletedUserClass)
                    
                    setUser({...user,classes:  deletedUserClass})
                    
                
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
                    .then(data=>{

                        console.log(data)
                        setEnrollment(data)
                        console.log(courses)
                        let foundCourse = courses.find(c=>c.id === data.course_id)
                        let updatedEnrollments = [...foundCourse.enrollments,data]
                        let updatedCourse = {...foundCourse,enrollments: updatedEnrollments}
                        let updatedArray = courses.map(course => course.id === data.course_id ? updatedCourse : course)
                        // setCourses([...courses.enrollments, [...courses.enrollments,data]])
                        // setUser({...user,classes: [...user.classes,data]})
                        setCourses(updatedArray)
                        setUser({...user,classes: [...user.classes,updatedCourse]})
                        console.log(courses)
                        // setLoggedin(true)

                    } 
                       
                        )

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
                 
                    let foundCourse = courses.find(c=>c.id === data.course_id)
                    let filteredEnrolled = foundCourse.enrollments.filter(d=> d.id !== data.id)
                    // let updatedEnrollments = [...foundCourse.enrollments,filteredEnrolled]
                    let updatedCourse = {...foundCourse,enrollments: filteredEnrolled}
                    let updatedArray = courses.map(course => course.id === data.course_id ? updatedCourse : course)
                    // setCourses([...courses.enrollments, [...courses.enrollments,data]])
                    // setUser({...user,classes: [...user.classes,data]})
                    setCourses(updatedArray)
                    // setUser({...user,classes: [...user.classes,updatedCourse]})
                    setUser({
                        ...user, classes: user.classes.filter(s=> s.id !== data.course_id )
                        })
                    console.log(courses)

                   } )

              }
    

    return (
        <UserContext.Provider value={{setCourses,setUser,enroll, deleteEnroll, createEnrollment, user,login,loggedin,logout,createCourse,coursesErrors,courses,deleteCourse,setCourseErrors,signup }}>
            {children}
        </UserContext.Provider>
    );


}

export { UserContext, UserProvider };
