import React from 'react'
import './button.css'

const Button = ({ onClick, name, label }) => {
  return (
    <button onClick={onClick} className={name}>
      {label}
    </button>
  )
}

export default Button
