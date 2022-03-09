import { useState } from "react"

export const Groceryinput =({Additems}) => {
    const [items , setItems] = useState("")
return(
    <div>
        <h1>Grocery List</h1>
        <input type="text" placeholder="Add Grocery" onChange={(elem) =>{
            setItems(elem.target.value)
        }}/>
        <button onClick={() =>{
         Additems(items)
        }}>ADD</button>
    </div>
)
}