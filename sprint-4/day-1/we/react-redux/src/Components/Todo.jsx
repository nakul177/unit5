import { useState } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { addtodo } from '../Redux/action'


export const Todo =() => {
    const [text , setText] = useState("")
    const todos = useSelector((store) => store.todo)
 
    const dispatch = useDispatch()
  return (
    <div>
   <input type="text" onChange={(e) =>{
     setText(e.target.value)
   }} />
   <button onClick={() =>dispatch(addtodo(text))}>Add Todo</button>
    {todos.map((e) =>(
        <h1>{e}</h1>
    ))}
    </div>
  )
}

