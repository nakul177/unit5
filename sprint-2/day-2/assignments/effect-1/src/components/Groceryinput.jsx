import { useEffect, useState } from "react";
import axios from "axios";

export const Groceryinput = () => {
  const [list, setList] = useState("");
 const [data , setData] = useState([])
 const [page , setPage] = useState(1)


 useEffect(() => {
    getData();
  }, [page]);

 

 const getData = () =>{
     axios.get(`http://localhost:3001/Itmes?_limit=3&_page=${page}`).then((res) =>{
         setData(res.data)
     })
 }

  const handleData = () => {
    axios.post("http://localhost:3001/Itmes", {
      title: list,
      purchased: false,
    })
    .then(() => {
      getData();
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ADD LIST "
        onChange={(e) => {
          setList(e.target.value);
        }}
      />
      <button onClick={handleData}>SAVE</button>
   
      <div>
          {data.map((e) =>(
              <h3 key={e.id}>{e.title}</h3>
          ))}
      </div>
      <button onClick={() => page>1 ? setPage(page-1) : ""}>PREV</button>
      <button  onClick={() => page<3 ? setPage(page+1) : ""}>NEXT</button>
    </div>
  );
};
