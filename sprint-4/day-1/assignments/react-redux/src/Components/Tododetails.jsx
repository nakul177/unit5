

import axios from "axios"
import {useSelector , useDispatch} from "react-redux"


export const Tododetails = () =>{
    const todos = useSelector((store) => store.todo)
    console.log(todos)
    const dispatch = useDispatch()

    // const getData = () =>{
    //     axios.get(`http://localhost/3001/todos/${}`).then((res)=>{

    //     })
    // }


    return(
        <div>
            <h1></h1>
        </div>
    )
}