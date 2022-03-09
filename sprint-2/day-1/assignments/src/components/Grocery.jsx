import { useState } from "react"
import { Groceryinput } from "./Groceryinput"
import { Grocerylist } from "./Grocerylist"
import { v4 as uuidv4 } from 'uuid';

export const Grocery = () =>{
    const [list , setList] = useState([])

    const Additems = (data) =>{
        const obj = {
            title:data,
            status : false,
            id:uuidv4()
        }
        setList([...list , obj])
    }

    const handleDone = (id) =>{
    const Check = list.map((el) =>(
        el.id===id ? { ...el, status: !el.status } : el
    ))
    setList(Check)
    }

    const handldelete = (id) => {
        const updatedTodos = list.filter((el) => el.id !== id);
        setList(updatedTodos);
      };

    return(
        <div>
       <Groceryinput  Additems={Additems}/> 
       {list.map((elms) =>(
          <Grocerylist todos={elms} handleDone={handleDone} handldelete={handldelete}/> 
       ))} 
        </div>
      
    )
}