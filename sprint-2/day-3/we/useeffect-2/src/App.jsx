import logo from './logo.svg';
import './App.css';
import { Stopwatch } from './components/Stopwatch';
import { useState } from 'react';

function App() {
  const [show , setShow] = useState(false)
  return (
    <div className="App">
      {show ? <Stopwatch /> : null}
     <button onClick={() =>{
       setShow(!show) 
     }}> {show ? "Hide Time Watch" : "Show Time Watch"  }</button>
      
    </div>
  );
}

export default App;
