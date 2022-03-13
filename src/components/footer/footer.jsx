import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-site-name'>RiH</p>
      <span className='footer-item'>
        <FaFacebookSquare className={'footer-link'} size={36} />
        <FaInstagram className={'footer-link'} size={36} />
      </span>
      <span className='footer-item'>
        <ul>
          <li>
            <Link className='footer-link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='footer-link' to='/about'>
              Contact
            </Link>
          </li>
          <li>
            <Link className='footer-link' to='/about'>
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link className='footer-link' to='/about'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className='footer-link' to='/about'>
              Return Policy
            </Link>
          </li>
        </ul>
        <br />
        <span className='footer-developer'>
          <p className='built-by'>Built By:</p>
          <p>
            <a className='developer-name' href='https://archerprogramming.com/'>
              ArcherProgramming
            </a>
          </p>
        </span>
      </span>
    </div>
  )
}

export default Footer
