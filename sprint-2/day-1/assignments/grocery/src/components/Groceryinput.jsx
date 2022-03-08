import { useState } from "react"

 export const Groceryinput = ({addlist}) =>{
    const [ Glist , setGlist] = useState("")
    return (
        <div>
            <input type="text"  placeholder="Add Grocery" onChange={(e) =>{
         setGlist(e.target.value)
            }}/>
            <button onClick={() =>{
       addlist(Glist)
            }} >Add Grocery</button>
        </div>
    )
}

