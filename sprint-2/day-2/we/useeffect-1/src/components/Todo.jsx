import axios from "axios"
import { useEffect, useState } from "react"

export const Todo = () =>{
const [text , setText] = useState("")
const [data , setData] = useState([])
const [page, setPage] = useState(1)

useEffect(() =>{
  getData();
}, [page])

const getData = () =>{
    axios.get(`http://localhost:3003/Tododata?_limit=3&_page=${page}`).then(res =>{
        setData(res.data)
            })
}

const handleData = () =>{
    try{
        axios.post("http://localhost:3003/Tododata", {text})
        getData()

    }catch(err){
        console.log("worng")
    }

}

    return(
        <div>
            <input id="todo" type="text" placeholder="Todo" onChange={(e) =>{
                setText(e.target.value)
            }}/>
            <button onClick={handleData} >Add</button>
            {data.map(e => <h2 key={e.id}>{e.text}</h2>)}
            <button onClick={() =>{
                setPage(page -1)
            }}>prev</button>
            <button onClick={() =>{
                setPage(page+1)
            }}>Next</button>
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