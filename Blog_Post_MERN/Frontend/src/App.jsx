import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import ViewPost from './pages/ViewPost'

const App = () => {
  return (
    <Routes>
      <Route path='/create' element={<CreatePost/>} />
      <Route path='/view' element={<ViewPost />} />
    </Routes>
  )
}

export default App