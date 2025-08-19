import logo from './logo.svg';
import './App.css';

function App() {
  let num1 = 10, num2 = 10;
  let sum = 0;
  function Addition() {
      sum = num1 + num2;
      console.log(sum);
  }
  
     function Subtraction() {
      sum = num1 - num2;
      console.log(sum);
  }
  function Multiplication() {
      sum = num1 * num2;
      console.log(sum);
  }
  function Division() {
      sum = num1 / num2;
      console.log(sum);
  }
  

  return (
<div>
  <div>{num1}</div>
  <div>{num2}</div>
  <button onClick={Addition}>Addition</button>
<div><button onClick={Subtraction}>Subtraction</button>
<div><button onClick={Multiplication}>Multiplication</button>
<div><button onClick={Division}>Division</button></div>
</div>
</div>

</div>

  );
}

export default App;
