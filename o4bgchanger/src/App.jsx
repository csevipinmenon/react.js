import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color,setcolor] = useState('olive')
  // function changeColor(color){
  //   setcolor(color)
  // }
  // {()=>changeColor('red')}

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button  onClick={()=>setcolor('red')}  className="outline-none px-4 py-1 rounded-full bg-red-600 shadow-lg text-black">Red</button>
          <button onClick={()=>setcolor('blue')} className="outline-none px-4 py-1 rounded-full bg-blue-600 shadow-lg text-black">Blue</button>
          <button onClick={()=>setcolor('green')} className="outline-none px-4 py-1 rounded-full bg-green-600 shadow-lg text-black">green</button>
          
        </div>
      </div>

    </div>
  )
}

export default App;
