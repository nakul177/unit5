import axios from "axios"
import { useEffect, useState } from "react"
import {Link } from "react-router-dom"
import {useParams} from "react-router"

export const Todoitem = () =>{
    const {id} = useParams()
const [data , setData] = useState([])

useEffect(() =>{
     getData()
},[])

const getData = () =>{
    axios.get("http://localhost:3001/todos").then((res) =>{
         setData(res.data)
    })
}



    return(
<div>
    {data.map((e , i) =>(
         <Link key={i} to={`/todo/${id}`}>
         <h1>{e.title}</h1>
       </Link>
    ))}
</div>
    )
}