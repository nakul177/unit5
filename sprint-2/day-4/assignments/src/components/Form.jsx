import axios from "axios";
import { useState } from "react";
import{useEffect} from "react"


export const Form = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Age: "",
    Addresss: "",
    Departemnt: "",
    Salary: "",
    marital: "",
  });

  const [data, setData] = useState([]);
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3002/User");
setData(result.data);
    })();
  }, []);



  const handleData = (e) => {
    const {id, value } = e.target
    
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3002/User", userData).then(() =>{
      alert("Thanks")
    }) 
  }


 

  return (
    <div>
        <div>
      <h1>Sign IN Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Name">Name :-</label>
        <input id="Name" type="text" placeholder="Name" onChange={handleData} />
        <br />

        <label htmlFor="Name">Age :-</label>
        <input id="Age" type="text" placeholder="Age" onChange={handleData} />
        <br />

        <label htmlFor="Name">Address :-</label>
        <input
          id="Addresss"
          type="text"
          placeholder="Addess"
          onChange={handleData}
        />
        <br />

        <label htmlFor="Name">Departemnt :-</label>
        <select id="Departemnt" onChange={handleData}>
          <option value="IT">IT</option>
          <option value="Police">Police</option>
        </select>
        <br />

        <label htmlFor="Name"> Salary :-</label>
        <input
          id="Salary"
          type="number"
          placeholder=" Salary"
          onChange={handleData}
        /> <br />

        <label htmlFor="Name">marital :-</label>
        <input id="marital" type="checkbox" onChange={handleData} />  <br />

        <input type="submit" value="submit" />
      </form>
      </div>
      <div>
      {data.map((e) =>(
 <h1 key={e.id}>{e.Name}</h1> 
      ))}
      </div>
    </div>
  );
};
// Create a react app.
// Create a form that accepts employee details
// Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )
