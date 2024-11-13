import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="w-64 max-w-sm shadow-lg rounded-lg bg-lime-200">
      <img src={props.image} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
        <p className="text-sm mb-4">{props.desc}</p>
        <Link to="/products">
        <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600">
            {props.BText}
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Card
