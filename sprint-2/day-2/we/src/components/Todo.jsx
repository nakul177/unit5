import { useEffect, useState } from "react"

export const Todo = () =>{
const [items , setItems] = useState([])



    return(
        <>
       <div>
           <input type="text" placeholder="items" onChange={(e) => setItems(e.target.value) }/>
           <button onClick={() =>{}
           </div>
      
       </>
    )
}