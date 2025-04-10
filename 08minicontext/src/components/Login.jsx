import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handlerSubmit = (e)=>{
        //prevent the page from refreshing
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         placeholder='username'
        />
        {" "}
        <input 
        type="password" 
        value={password}
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}

        />
        <button onClick={handlerSubmit}>Submit</button>
    </div>
  )
}

export default Login