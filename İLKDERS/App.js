import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor,setBtnColor] = useState("red")
  const newBtnColor = btnColor === "red" ? "blue" :  "red"  //terneray operator
  
  //inaktif state
  const [isChecked,setIsChecked] = useState(false)
  
  return (
    <div className="App">
      <button
        disabled={isChecked}
        style={{backgroundColor: isChecked ? "gray" : btnColor}}
        onClick={()=>setBtnColor(newBtnColor)}>
        Change to {newBtnColor}
        </button>
        <input type="checkbox" onChange={()=>setIsChecked(!isChecked) } />
        <label>butonu inaktif yap</label>
    </div>
  );
}

export default App;
