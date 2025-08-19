import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[1,2,3,4,5,6,7,8,9,10];
  
  return (

  arr.map((SingleElement)=>{
  return <div>{SingleElement*2}</div>
  })


  );
}

export default App;
