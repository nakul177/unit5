import axios from "axios";
import { useState } from "react";

export const Form = () => {

    const [formdata , setFormdata] = useState({
  username : "",
  age:""
    })

    const handlechange = (e) =>{
      const {id , value} = e.target
       setFormdata({...formdata , [id]:value})
    }

     const handleSubmit = (e)=>{
       try{
        e.preventDefault();
        axios.post("http://localhost:3001/Users" , formdata).then(() =>{
          alert("user create")
          setFormdata({
            username:"",
            age:"",
          }
            
          )
        })
       }catch(err){
         console.logf("worng")
       }
      
      }
        
  return (
    <form action="" onSubmit={handleSubmit }>
      <h2>Sing In</h2>
      <input value={formdata.username} id="username" type="text" placeholder="name"  onChange={handlechange}/>
      <input value={formdata.age}  id="age" type="number" placeholder="age"  onChange={handlechange} />
      <input type="submit" value="submit" />
    </form>
  );
};
