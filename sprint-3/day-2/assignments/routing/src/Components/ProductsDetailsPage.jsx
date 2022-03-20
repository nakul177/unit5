import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const ProductsDetailsPage = ({title , price}) => {
  const [product , setProduct] = useState([])
  const {id} = useParams()
 

  useEffect(() =>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      const data = res.data
     setProduct([data])
    })
  },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={""} alt="" />
        {product.map((el)=>(
        <div key={el.id} className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{el.title}</h2>
            <h5 className="productPrice">Price : {el.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            
              <h1>{el.description}</h1>
           
          </div>
        </div>
         ))}
      </div>
    </>
  );
};
