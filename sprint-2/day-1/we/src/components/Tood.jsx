import { useState } from "react"
import { Toodinput } from "./Toodinput"
import { Tooditem } from "./Tooditem"

export const Tood = () =>{
    const [todos , setTodos] = useState([])

    const addtodo = (data) =>{
        setTodos([...todos , data])
    }
    return(
        <div>
        <h1>Tood Mini App</h1>
         <Toodinput addtodo={addtodo} />
        {todos.map(e => <Tooditem todo={e} />)}
        </div>
    )
}