import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./contex";
import { useContext } from "react";
import {forwardRef, useImperativeHandle, useRef} from 'react';



const CoursesContext = React.createContext()

function CoursesProvider({children}){
    const{callCourses} = useContext(UserContext)
    const [courses,setCourses] = useState()
    const [course,setCourse] = useState()
    const [courseErrors,setCourseErrors] = useState()
    const navigate = useNavigate()


    function createCourse(clas){
        console.log(clas)
        fetch("http://localhost:3000/classes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(clas)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setCourse({...course, data})
                    navigate("/dash")


                }
                else {
                    // setPitches(pitches)
                    console.log(data.errors)
                    const mistakes = data.errors.map(e => <li>{e}</li>)
                    setCourseErrors(mistakes)


                }

            })
            function patchCourse(formData) {
                console.log(formData)
                fetch(`http://localhost:3000/${formData.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
        
                    },
                    body: JSON.stringify({
                        content: formData.content,
                        id: formData.id
        
                    })
        
                })
                    .then(res => res.json())
                    .then(data => {
        
        
                        // console.log(data)
        
                        // if(!data.errors){
                            
                        // let course = courses.find(pitch => pitch.id === data.pitch_id)
        
                        // let editedNote = pitch.notes.map(note => {
                        //     if (note.id === data.id) {
                        //         return data
                        //     }
        
                        //     else { return note }
        
        
                        // })
        
                        // let updatedPitch = { ...pitch, notes: editedNote }
                        // let updatedArray = pitches.map(pitch => pitch.id === data.pitch_id ? updatedPitch : pitch)
        
        
                        // setPitches(updatedArray)
        
                        // }
                        // else{
                        //     console.log(data)
                        //     const mistakes = data.errors.map(e => <li>{e}</li>)
                        //     console.log(mistakes)
                        //     setUpdatedNoteErrors(mistakes)
        
                        // }
        
        
        
        
                    })
        
        
            }
           

           

    }




    return (
        <CoursesContext.Provider value={{ createCourse ,courseErrors }}>
            {children}
        </CoursesContext.Provider>
    );

}

export {CoursesContext,CoursesProvider};