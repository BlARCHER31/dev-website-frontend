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
        The purpose of this project was to demonstrate my current Full Stack
        Capabilities and also continue to grow as a developer. I implemented
        some new features into this project that I had not yet used or tried.
        Other than simply showcasing my current knowledge and understanding I
        was able to learn at the same time.
      </p>
      <p className='about-heading'>The Inspiration</p>
      <p className='about-description'>
        My wife and her family have always created these custom boards from old
        and used wood. They would sand, stain and paint them to give new life
        and reclaim the wood. The money that they would get from the sales would
        then be used toward mission trips to places like Honduras and Uganda.
        <br />
        My wife has contemplated restarting this and growing it into a larger
        business. So I decided to use it as a project idea and the basis for a
        future Ecommerce Website for her.
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
