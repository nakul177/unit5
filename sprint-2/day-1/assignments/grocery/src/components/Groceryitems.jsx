export const Groceryitems = ({items}) =>{
 return(
<div>
    {items.title} ---{items.state ?"Done" :"not done"}
    
   <h1> {items.index} </h1> 
    <button>Done</button>
    <button>Delete</button>
</div>
 )
}