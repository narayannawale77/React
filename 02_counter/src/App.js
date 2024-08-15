import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);
  

  function addValue(){
    if(counter < 20)setCounter(counter + 1);
    
    


    // fibre consect
    // +1
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // +4
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);

  }
  console.log(counter);

  function removeValue(){
    if(counter > 0)setCounter(counter- 1);
    
  }
  function reset(){
    setCounter(0);
  }
  return (
    
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
