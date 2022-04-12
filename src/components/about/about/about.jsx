import React from 'react'
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiHtml5 } from 'react-icons/si'
import './about.css'

const About = () => {
  const size = 48

  return (
    <div className='about'>
      <h3 className='title'>About this Project</h3>
      <p className='about-heading'>TechStack</p>
      <li className='about-list about-tech-stack'>
        <ul>
          React <FaReact size={size} />
        </ul>
        <ul>
          NodeJs <FaNodeJs size={size} />
        </ul>
        <ul>
          MySql <SiMysql size={size} />
        </ul>
        <ul>
          JavaScript <SiJavascript size={size} />
        </ul>
        <ul>
          HTML/CSS{' '}
          <span>
            <SiHtml5 size={size} /> <FaCss3Alt size={size} />
          </span>
        </ul>
      </li>
      <p className='about-heading'>The Purpose</p>
      <p className='about-description'>
        There were actually two purposes for this project. One of them being to
        demonstrate the level of frontend and backend skill I have acquired, but
        to also build a real world website for my wife. My wife and her family
        have made custom designed repurposed boards for quite some time now. All
        by word of mouth and some Facebook things. She has decided to venture
        farther into that area by starting her own custom sign business.
        Currently all the products on this website and the DB are all test
        products.
      </p>
      <p className='about-heading'>Goals</p>
      <li className='about-list'>
        <ul>Demonstrate current Full Stack abilities</ul>
        <ul>Create a mock for a future website</ul>
        <ul>Further My knowledge of React and NodeJs</ul>
        <ul>Develop a better understanding of the MySQL DB</ul>
      </li>
    </div>
  )
}

export default About
