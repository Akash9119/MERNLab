import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewPost = () => {
    const [post, setPost] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3000/get-post').then((res) => {
                console.log(res.data.response)
                setPost(res.data.response)
            })
        }, [])
        


  return (
    <div className='flex p-6 flex-wrap gap-4'>
        {post.map((item) => (
            <div key={item._id} className='flex flex-col gap-4 border rounded-md p-4'>
                <img className='w-96 h-64 object-cover' src={item.image} alt="post" /> 
                <p>{item.caption}</p>
            </div>
        ))}
    </div>
  )
}

export default ViewPost
