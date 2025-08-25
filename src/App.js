import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[num=0,setNum]=useState();
  // const[count,setCount]=useState();
  function onCount(){
    setNum(num+1);
  }

  return (
    <div>
    <div>{num}</div>
<button onClick={onCount}>count</button></div>
  );
}
export default App;
