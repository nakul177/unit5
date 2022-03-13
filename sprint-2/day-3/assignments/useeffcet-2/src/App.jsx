import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import { useState } from 'react';

function App() {
  const start = 10
  const end = 30
 const [show , setShow] = useState(false)

  return (
    <div className="App">
      {!show ? <Timer start={start} end={end} /> : null }
  <button onClick={() =>{
    setShow(!show) 
  }}>{show ? "Show Timer" : "hide Timer"}</button>
    </div>
  );
}

export default App;
