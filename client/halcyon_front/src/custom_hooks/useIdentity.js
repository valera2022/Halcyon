import { useContext, React } from "react"
import { UserContext } from "../context/contex"



export default function useIdentity (){
    const {user} = useContext(UserContext)

    const isTeacher = ()=>{
        if (user.entryable_type === "Teacher"){
            return true
        }

    }
    const isStudent = () => {
        if (user.entryable_type === "Student"){
            return true
        }

    }

    return {isTeacher,isStudent}

}