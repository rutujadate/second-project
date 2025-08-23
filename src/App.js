import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState();
  const [showBlock, setShowBlock] = useState(false);
  function onSubmit() {
    setShowBlock(true)
  }
  function handleNameChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <input
        name='text' value={name}
        onChange={handleNameChange} />
      <div><button onClick={onSubmit}>Submit</button></div>
      {showBlock ?<div>
        <div>{name}</div>
        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" width="100" />
      </div>:<h1>Please Click on Submit Button</h1>}
    </div>


  );
}
export default App;
