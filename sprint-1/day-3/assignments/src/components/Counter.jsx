import { useState } from "react"

export function Counter({value}){
    const [count , setCounter ]= useState(value)
    
    return(
    <div>
        <h1>counter is : {count}</h1>
        <button onClick={() =>{
            setCounter(count+1)
        }}>Add 1</button>
        <button onClick={()=>{
            setCounter(count-1)
        }}>Sub 1</button>
        <button onClick={() =>{
            setCounter(count*2)
        }}>double</button>
    </div>

    )
}
