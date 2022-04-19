import { useEffect, useRef, useState } from 'react';
import './App.css';
// import {Form} from "./components/form"

function App() {
  const [counter,setCounter] = useState(0)
  const counterRef = useRef(null)

  useEffect(()=>{
    startInterval()
  }, [])

  const startInterval = ()=>{
    counterRef.current = setInterval(()=>{
      setCounter((p)=> p+1)
    },500) 
  }
  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={()=>{//console.log(counter)
        clearInterval(counterRef.current)}}>Pause</button>
      <button onClick={()=>{startInterval()}}>Start</button>
      <button onClick={()=>{
        clearInterval(counterRef.current)
        setCounter(0)
      }}>Reset</button>

      {/* <Form /> */}
    </div>
  );
}

export default App;
