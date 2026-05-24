import React from 'react'
import {Globe, FileUser} from 'lucide-react'
import './card.css'

const Card = (props) => {
  return (
    <div className="card">

        <div className="top">
          <img className="card-img" src={props.image} alt="Card Image" />
          <div className="top-inner">
            <h3 className="userName">{props.userName}</h3>
            <p className="userDesignation">{props.userDesingnation}</p>
            <div className="socials">
              <a href={props.website} target="_blank" rel="noopener noreferrer"><Globe size={14} color='#000' /></a>
              <a href={props.twitter} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-twitter-x" viewBox="0 0 14 14" id="Twitter-X--Streamline-Bootstrap" height={16} width={16} ><desc>{"\n    Twitter X Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth={1} /></svg></a>
              <a href={props.portfolio} target="_blank" rel="noopener noreferrer"><FileUser size={16} color='#000' /></a>
            </div>
          </div>
        </div>

        <div className="bottom">
          <button className="btn1">
            Follow
          </button>
          <button className="btn2">
            Message
          </button>
        </div>
    </div>
  )
}

export default Card