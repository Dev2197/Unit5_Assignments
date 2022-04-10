import { useState } from 'react';
import './App.css';

function App() {

  const change = (value)=>{
    setCounter(counter+value)
  }

  const double = ()=>{
    setCounter(counter*2)
  }

  const [counter,setCounter] = useState(10)
  return (
    <div className="App">
      <h2 className={`${counter%2==0 ? "green" : "red"}`}>Counter: {counter}</h2>

      <button onClick={()=> {change(1)}}>Increment</button>
      <button onClick={()=> {change(-1)}}>Decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
}

export default App;
