import { useState } from "react";
import { Groceryinput } from "./Groceryinput";
import { Groceryitems } from "./Groceryitems";

export const Grocery = () => {
  const [list, setList] = useState([]);
  
  const addList = (data) => {
   
      const obj = {
          title : data,
          state : false,
        
      }
     
    setList([...list, obj]);
   
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <Groceryinput addlist={addList} />
      {list.map((e ) => (
        <Groceryitems items={e}  />
      ))}
    </div>
  );
};
