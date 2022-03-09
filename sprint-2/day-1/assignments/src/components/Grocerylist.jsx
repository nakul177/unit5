export const Grocerylist = ({todos , handleDone , handldelete}) =>{
return (
    <div>
       <div>
       {todos.title} --- {todos.status ? "Done" : "Not Done"} 
           </div> 
           <button onClick={() =>{
               handleDone(todos.id)
           }}>DONE</button>
           <button onClick={() =>{
               handldelete(todos.id)
           }}>Delete</button>
    </div>
)
}