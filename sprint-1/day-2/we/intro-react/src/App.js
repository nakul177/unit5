import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = [
    { name: "nakul", age: 12 },
    { name: "navin", age: 29 },
    { name: "bhush", age: 21 },
    { name: "akshak", age: 19 },
  ];
  return (
    <div className="App">
     <div>
       {data.map((user) => (Userdata(user)))}
     </div>
    </div>
  );
}

function Userdata({name,age}){
 return( <div>
    <h1>hello {name}</h1>
  <p>
    {name} age is {age}
  </p>
  </div>
 )
}


export default App;
