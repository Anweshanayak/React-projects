import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {
  const [weight,setWeight]=useState(70);
  const [height,setHeight]=useState(180);

  function onWeightChange(event){
    setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
  }
  //memo optimizes speed and performance
  const output=useMemo(
    ()=>{
      const calculateHeight= height/100;
      return(weight/(calculateHeight*calculateHeight)).toFixed(1)
    },[weight,height]
  )
  
  return (
    <main>
      <h1>Project 4: BMI Calculator</h1>
      <div>
        <p classname="input-section">Weight: {weight} kg</p>
        <input className="slider" type='range' min="40" 
        max="200" step="1" onChange={onWeightChange}/>
        <p classname="input-section">Height: {height} cm</p>
        <input className="slider" type='range' min="140"
        max="220"
        onChange={onHeightChange}/>
      </div>
      <div>
        <p className='output-section'>Your BMI is:</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
