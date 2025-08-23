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
    setNum1 (parseInt(event.target.value))

  }
  function handleNum2Change(event) {
    setNum2 (parseInt(event.target.value))
  }
  function onSubmit(event) {
    setAddition(num1 + num2)
    setSubtraction(num1 - num2)
    setMultiplication(num1 * num2)
    setDivision(num1 / num2)
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
      <div><button onClick={onSubmit}>Submit</button></div>
      <div><h1>Addition of {num1} and {num2} is : {addition}</h1>
      </div>
      <div><h1>Subtraction of {num1}and {num2} is : {subtraction}</h1>
      </div>
      <div><h1>Multiplication of {num1} and {num2} is :{multiplication}</h1>
      </div>
      <div><h1>Division of {num1} and {num2} is : {division}</h1>
      </div>
    </div>


  );
}
export default App;
