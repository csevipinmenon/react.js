import { useState } from 'react'

import './App.css'
function App() {
 const [counter,setCounter] = useState(15);
  const addValue = ()=>{
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)  //it still increase 1 at a time read reactCounter notepad file to understand this 

    //if you really want to like ki one click 3 , 4 like update ho to u need write like following

    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)

    
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
  <>
  <h1>React course with vipin {counter}</h1>
  <h2>Counter value:{counter} </h2>
  <button
  onClick={addValue}
  >Add value </button>{" "}
  <button
  onClick={removeValue}
  >Remove value</button>
  <p>footer: {counter}</p>
  </>
  )
}

export default App
