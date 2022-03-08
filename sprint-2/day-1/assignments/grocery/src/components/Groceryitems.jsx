export const Groceryitems = ({items}) =>{
 return(
<div>
    {items.title} ---{items.state}
    <button>Done</button>
    <button>Delete</button>
</div>
 )
}