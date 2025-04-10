import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data,setData] =React.useState([]);

  // useEffect(()=>{
  // fetch('https://api.github.com/users/csevipinmenon')
  // .then((response)=>response.json())
  // .then((data)=>{
  //   console.log(data)
  //   setData(data)
  // })
  // },[])

   const data = useLoaderData();


  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-3xl text-white'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="vipin kumar"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/csevipinmenon')
  return response.json();
}