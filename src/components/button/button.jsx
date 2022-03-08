import React from 'react'
import './button.css'

const Button = ({ name, label }) => {
  return <button className={name}>{label}</button>
}

export default Button