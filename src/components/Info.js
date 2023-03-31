import React, { useState, useEffect } from 'react'
import { aboutNav } from '../data'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

const Info = () => {
  const [item, setItem] = useState({ name: 'Education' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const newProjects = aboutNav.filter((project) => {
      return project.name === item.name
    })
    setProjects(newProjects)
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
    setActive(index)
  }

  return (
    <div>
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {aboutNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className='grid gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          if (item.name === 'Education') {
            return <Education />;
          } else if (item.name === 'Experience') {
            return <Experience />;
          } else {
            return <Skills />;
          }
        })}
      </section>
    </div>
  )
}

export default Info