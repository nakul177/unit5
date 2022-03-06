
import './App.css';
import {Counter} from "./components/Counter.jsx"

function App() {
  const value = 0
  return (
    <div className="App">
   <Counter value={value}/>
    </div>
  );
}

export default App;
