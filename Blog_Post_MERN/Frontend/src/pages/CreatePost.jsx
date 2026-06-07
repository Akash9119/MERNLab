import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreatePost = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }
  
  return (
    <div className='flex flex-col justify-center items-center h-screen w-100% gap-5'>
    <h2 className='text-3xl font-semibold'>Create Your Post</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <input placeholder='Enter Image' className='px-6 py-2 border rounded-md cursor-pointer' type="file" name="image" id="image" />
          <input placeholder='Enter Image Caption' className='px-6 py-2 border rounded-md' type="text" name='caption' id='caption' />
          <button className='bg-blue-600 text-white px-6 py-2 rounded-md cursor-pointer' type="submit">Create Post</button>
        </form>
    </div>
  )
}

export default CreatePost