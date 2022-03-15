import logo from './logo.svg';
import './App.css';
import {Button, Button2} from "./components/Button.jsx"
import { useState } from 'react';

function App() {

  return (
    <div className="App">
   <Button bg="#2FA4FF"  color='white' border="none">Primary Button</Button>
   <Button bg="white"  color='black' border="1px solid black" >Default button</Button>
   <Button bg="white"  color='black' border="1px dashed black">Dashed button</Button>
   <Button bg="white"  color='black' border="none">Text button</Button>
   <Button bg="white"  color='blue' border="none">Link button</Button>
    </div>
  );
}

export default App;
