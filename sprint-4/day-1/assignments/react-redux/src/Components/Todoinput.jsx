import { useState } from "react"
import { Tododata } from "../Redux/actions"
import axios from "axios"



export const Todoinput = () =>{
const [text , setText] = useState("")




const Addtodos = () => {
   axios.post("http://localhost:3001/todos" ,{
       title :text,
       state : false
   })
}


    return(
        <div>
            <input type="text" onChange={(e) =>{
            setText(e.target.value)
            }} />
   <button onClick={() =>{
       Addtodos()
   }}>ADD TODO</button>



        </div>
    )
}