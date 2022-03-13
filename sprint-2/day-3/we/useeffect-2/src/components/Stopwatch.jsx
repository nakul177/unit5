import { useEffect, useState } from "react"


export const Stopwatch = () =>{

    const [ time , setTime] = useState(10)
    
useEffect(() =>{
 const id = setInterval(() =>{
     setTime((prev) =>{
         if(prev <= 1){
             return 0;
         }
         return prev - 1
     })
 }, 500)

return () =>{
    clearInterval(id)
}

},[])



    return(
        <div>
           Timer : {time}
        </div>
    )
}