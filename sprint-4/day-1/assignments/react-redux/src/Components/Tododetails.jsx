

import axios from "axios"
import { useEffect, useState } from "react"
import {useSelector , useDispatch} from "react-redux"
import {useParams} from "react-router"
import { Tododata } from "../Redux/actions"

export const Tododetails = () =>{
    const {id} = useParams()
    const todos = useSelector((store) => store.todo)
    const dispatch = useDispatch()
    const[state , setState] = useState(false)

    useEffect(() =>{
        getData()
    },[])

    const getData = () =>{
        try{
            axios.get(`http://localhost:3001/todos/${id}`).then((res)=>{
                dispatch(Tododata(res.data))
           }).catch((res) => alert("todo delete"))
        }catch(err){
            alert("todo detele ")
        }
      
    }

const handleDelete = () =>{
try{
    axios.delete(`http://localhost:3001/todos/${id}`)
}catch(err){
    alert("todo detele ")
}
  
}

const handleDone = (id) =>{
    const Check = todos.map((el) =>(
        el.id===id ? { ...el, status: !el.status } : el
    ))
    setState(Check)
    }


return(
<div>
    {todos.map((e , i) =>{
        return(
            <div key={i}>
    <h1>{e.title}</h1>
    <button onClick={() =>handleDelete(e.id)}>delete</button>
    <button onClick={() => handleDone(e.id)}>{state ? "Done" : "Note Done"}</button>
            </div>
      
        )
    })}
</div>
)
}