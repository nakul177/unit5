import logo from './logo.svg';
import './App.css';

function App() {
  const data = [{hedear:"Mobile Opreating System" , list:["android","Blackerry","iphone","Windows Phone"]},
                {hedear:"Mobile Manufacture" , list:["Samsung","HTC","Micromax","Apple"]}]
  return (
    <div className="App">
     <div>
{data.map((el) => <DataCart hedear={el.hedear} list={el.list} />
)}
     </div>
    </div>
  );
}
function DataCart ({hedear , list}){
  return(
    <div>
      <h1>{hedear}</h1>
      <List list={list}/>
    </div>
  )
}

function List({list}){
  return (
    <ul>
      {list.map((el)=><li>{el}</li>)}
    </ul>
  )
}


export default App;
