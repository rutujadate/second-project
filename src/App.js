import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[1,2,3,4,5,6,7,8,9,10];
  
  return (

  arr.map((SingleElement)=>{
    if(SingleElement%2===0){
    return <div><i>{SingleElement*2}</i></div>
    }
    else{
      return <div><strong>{SingleElement*2}</strong></div>
    }
  
  })


  );
}

export default App;
