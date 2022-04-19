// import { useState } from 'react';
import './App.css';
// import { Button } from './components/Button';
import{Button2} from './components/Button2'

function App() {
  // const [theme,setTheme] = useState("dark");
  return (
    <div className="App">
      {/* <h1>Theme is {theme}</h1>
      <Button theme={theme} onClick ={()=>{
        alert("Click me")
      }} >Click me</Button>
      <Button  onClick ={()=>{
        alert("Sign In")
      }}>Sign In</Button>

     <Button  onClick ={()=>{
        alert("Logout")
      }}>Logout</Button>

      <Button onClick={()=>{
        {setTheme(theme==="dark"? "light" : "dark" )}
      }}>Change Theme</Button> */}

      <Button2 btn_type={"primary"} bdr={"none"}>Primary Button</Button2>
      <Button2 btn_type={"default"} bdr={"solid"}>Default Button</Button2>
      <Button2 btn_type={"dashed"} bdr={"dashed"}>Dashed Button</Button2>


    </div>
  );
}

export default App;
