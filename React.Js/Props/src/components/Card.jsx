import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src="https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" />
      <h1 className="card-name">{props.name}</h1>
      <p className="card-description">This is a card component that can be reused in different parts of the application.</p>
      <button className="card-button">Click Me</button>
    </div>
  )
}

export default Card