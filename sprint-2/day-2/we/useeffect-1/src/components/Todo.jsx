import axios from "axios"
import { useEffect, useState } from "react"

export const Todo = () =>{
const [text , setText] = useState({
    todo:""
})

const handle = (e) =>{
    const {id , value} = e.target
    setText({...text , [id] : value })
}

const handleData = () =>{
    try{
        axios.post("http://localhost:3003/Tododata", text).then(() => {
            alert("Thanks");
          });
    }catch(err){
        console.log("worng")
    }

}

    return(
        <div>
            <input id="todo" type="text" placeholder="Todo" onChange={handle}/>
            <button onClick={handleData} >Add</button>
        </div>
    )






















// const [counter1 , setCounter1] = useState(0)

// const [counter2 , setCounter2] = useState(0)

// console.log("before")

// useEffect(() =>{
// console.log("insides 1")
// }, [counter1 , counter2 ])


// useEffect(()=>{
//     console.log("insude 2")
// } , [counter2])

// console.log("after")
//     return(
//         <div>
//  <div>Hello</div>
//  <button onClick={() =>{
//      setCounter1(counter1 + 1)
//  }}>add 1</button>
//  <button onClick={() =>{
//      setCounter2(counter2 + 1)
//  }}>add 2</button>
//         </div>
       
//     )
}