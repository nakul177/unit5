import axios from "axios";
import { useEffect, useState } from "react";
import { useParams , Navigate } from "react-router-dom";



export const ProductsDetailsPage = ({title , price}) => {
  const [product , setProduct] = useState([])
  const [state , setState] = useState(false)
  const {id} = useParams()
  
 

  useEffect(() =>{
  axios.get(`http://localhost:3001/products/${id}`).then((res)=>{
       setProduct(res.data)
      })
      .catch((err) =>{
       setState(true)
      }) 
  },[])
  return (
    <>
    {state ?  (<Navigate to={"/notfound"} />) :(
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
      
          <div key={product.id} className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            
              <h1>{product.description}</h1>
           </div> 
          </div> 
      
      </div>)
      }
    </>
  );
  
};
