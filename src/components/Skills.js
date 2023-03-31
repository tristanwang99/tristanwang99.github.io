import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 md:grid-flow-row md:grid-cols-6 skills">
        {skills.map((skill, index) => {
          return (
            <div className='skill flex items-center justify-center' key={index}>
              <img className='skill-image' src={skill.image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills