import { Route, Routes } from "react-router"
import { Todo } from "../Components/Todo"
import { Tododetails} from "../Components/Tododetails"


export const Allrouter = () =>{
    return(
<>
<Routes>
         <Route path="/" element={<Todo/>}/>
         <Route path="/todo/:id" element={<Tododetails/>} />
     </Routes>
</>
    )
    
}


