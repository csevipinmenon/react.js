import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
const vname ={
 name:'vipin',
 loaction:"parikonch",
 country:'india'
}

const arr = [1,2,3,4,5]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-400 p-3 rounded-lg text-gray-900'>Vite with Tailwind</h1>
    <Card username='vipin' post='web engg.'/>     
      {/* //use Card.jsx */}
    <Card myarr={arr}/>
    <Card vdetail={vname}/>
    </>
  )
}

export default App
