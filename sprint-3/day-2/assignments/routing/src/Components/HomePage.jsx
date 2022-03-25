import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [product , setProduct] = useState([])
  useEffect(() => {
  axios.get("http://localhost:3001/products").then((res) =>{
    setProduct(res.data)
  })
  }, [])
  
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {product.map((el) => {
          return <Link to={`/products/${el.id}`} key={el.id}>
            <img src={el.img} alt="" />
            <h2>{el.name}</h2>
            
          </Link>;
        })}
      </div>

    </>
  );
};
