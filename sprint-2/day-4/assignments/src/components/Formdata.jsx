import axios from "axios";
import { useState } from "react";
import{useEffect} from "react"

export const Formdata = () =>{
    const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3002/User");
setData(result.data);
    })();
  }, []);
 return(
    <div>
    <table>
    <tr>
 <th>Name</th>
 <th>Age</th>
 <th>Address</th>
 <th>Department</th>
 <th>Salary</th>
 <th> marital state </th>
</tr>
   {data.map((e) =>(

<tr key={e.id}>
 <td>{e.Name}</td>
 <td>{e.Age}</td>
 <td>{e.Addresss}</td>
 <td>{e.Departemnt}</td>
 <td>{e.Salary}</td>
 <td>{e.marital ?"Single" :"Married"  }</td>
</tr>

    ))}
     </table>
    </div> 
 )
}