import { Navbar } from "./Navbar";
import{Routes , Route} from "react-router-dom"
import { HomePage } from "./HomePage";

import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";

export const Routeing = () => {
  return (
    <>
      <Navbar />
      <Routes>
<Route  path='/' element={<HomePage/>} />
<Route  path='/Product' element={<ProductsPage />} />
<Route  path='/Products/:id' element={<ProductsDetailsPage/>} />
    </Routes>
    </>
  );
};
