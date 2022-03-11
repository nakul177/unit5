import logo from './logo.svg';
import './App.css';
import{useRef, useState , useEffect} from "react"

function App() {

  const [count , setCount] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    StartTime()

  }, [])
  

  const StartTime = () =>{
    ref.current = setInterval(() =>{
      setCount((prev) => prev + 1)
    }, 1000)
  }



  return (
    <div className="App">
  <h1>counter is : {count}</h1>
  <button onClick={() => clearInterval(ref.current)}>Stop</button>
  <button onClick={StartTime}>Start</button>
  <button onClick={() => {
clearInterval(ref.current)
setCount(0)
  }}>Reset</button>
    </div>
  );
}

export default App;
