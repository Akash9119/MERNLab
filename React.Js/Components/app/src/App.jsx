import React from 'react'
import Card from './components/Card'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Card />
      <Card />
    </div>
  )
}

export default App