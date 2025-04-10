import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userId} =useParams()
  return (
    <div className='bg-orange-600 text-center text-3xl text-black py-4'>User:{userId}</div>
  )
}

export default User