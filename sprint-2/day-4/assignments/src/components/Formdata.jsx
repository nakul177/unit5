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
         {data.name}
     </div>
 )
}