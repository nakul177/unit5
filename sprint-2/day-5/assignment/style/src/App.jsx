import logo from './logo.svg';
import './App.css';
import {Button, Button2} from "./components/Button.jsx"
import { useState } from 'react';

function App() {

const [text, settext] = useState([])


  return (
    <div className="App">
   <Button theme={"a"}>Primary Button</Button>
   <Button theme={"b"}>Default button</Button>
   <Button theme={"c"}>Dashed button</Button>
   <Button theme={"d"}>Text button</Button>
   <Button theme={"e"}>Link button</Button>
    </div>
  );
}

export default App;
