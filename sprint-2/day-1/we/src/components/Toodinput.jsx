import { useState } from "react"

export const Toodinput = ({addtodo}) =>{
    const [text , setText]  = useState("")
    return(
        <div>
        <input type="text" onChange={ (e) =>{
             setText(e.target.value)
        }} />
        <button onClick={()=> {
          addtodo(text)
        }}>Add Tood</button>
        </div>
        
    )
}