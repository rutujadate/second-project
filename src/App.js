import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [addition, setAddition] = useState();
  const [subtraction, setSubtraction] = useState();
  const [multiplication, setMultiplication] = useState();
  const [division, setDivision] = useState();
  function handleNum1Change(event) {
    setNum1(parseInt(event.target.value))

  }
  function handleNum2Change(event) {
    setNum2(parseInt(event.target.value))
  }
  function onAddition() {
    setAddition(num1 + num2);
    setSubtraction(undefined);
    setMultiplication(undefined);
    setDivision(undefined);
  }
  function onSubtraction() {
    setSubtraction(num1 - num2)
    setAddition(undefined);
    setMultiplication(undefined);
    setDivision(undefined);
  }
  function onMultiplication() {
    setMultiplication(num1 * num2)
    setAddition(undefined);
    setSubtraction(undefined);
    setDivision(undefined);
  }
  function onDivision() {
    setDivision(num1 / num2)
    setAddition(undefined);
    setSubtraction(undefined);
    setMultiplication(undefined);
  }
  return (
    <div>
      <div>
        <input
          type='number'
          name='number'
          value={num1}
          onChange={handleNum1Change}
        /></div>
      <div>
        <input
          type='number'
          name='number'
          value={num2}
          onChange={handleNum2Change}
        /></div>
      <div>
        <button onClick={onAddition}>Addition</button>
        <button onClick={onSubtraction}>Subtraction</button>
        <button onClick={onMultiplication}>Multiplication</button>
        <button onClick={onDivision}>Division</button>
      </div>
      
        {addition!==undefined &&<h1>Addition of {num1} and {num2} is :{addition}</h1>}
    
        {subtraction!==undefined &&<h1>Subtraction of {num1}and {num2} is : {subtraction}</h1>}
    
    
        {multiplication!==undefined &&<h1>Multiplication of {num1} and {num2} is :{multiplication}</h1>}
    
      
        {division!==undefined &&<h1>Division of {num1} and {num2} is : {division}</h1>}

    </div>


  );
}
export default App;
