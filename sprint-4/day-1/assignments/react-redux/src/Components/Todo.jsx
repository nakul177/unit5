import { Tododetails } from "./Tododetails"
import { Todoinput } from "./Todoinput"
import { Todoitem } from "./Todoitem"

export const Todo = () =>{
    return(
        <>
         <h1>TODO APP</h1>
        <Todoinput/>
        <Todoitem/>
        </>
       
    )
}