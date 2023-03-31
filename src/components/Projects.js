import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { projectsNav, projectsData } from '../data'
import Project from './Project'

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
=======
import { projectsData } from '../data'
import { projectsNav } from '../data'
import Project from './Project'

const Projects = () => {
  const [item, setItem] = useState({ name: 'All' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name
>>>>>>> 2654573... first commit
      })
      setProjects(newProjects)
    }
  }, [item])
<<<<<<< HEAD
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }
=======

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
    setActive(index)
  }

>>>>>>> 2654573... first commit
  return (
    <div>
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
<<<<<<< HEAD
            return <li
              onClick={(e) => { handleClick(e, index) }}
              key={index}
              className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
            >
              {item.name}
            </li>
=======
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
>>>>>>> 2654573... first commit
          })}
        </ul>
      </nav>
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
<<<<<<< HEAD
          return <Project item={item} key={item.id} />
=======
          return <Project item={item} key={item.id} />;
>>>>>>> 2654573... first commit
        })}
      </section>
    </div>
  )
}

export default Projects