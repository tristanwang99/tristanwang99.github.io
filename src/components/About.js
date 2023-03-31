import React from 'react'
import Info from './Info'
import Resume from '../assets/resume-ui-ux.pdf'

const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title'>About</h2>
          <p className='subtitle mb-5'>Hi, I'm Tristan, a fourth-year undergraduate at Stanford  majoring in Computer Science (HCI) and minoring in Economics. I'm interested in opportunities related to web & app development, UI/UX design, finance & marketing.</p>
          <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all mb-16 lg:mb-24'>
            <a href={Resume} download>Download Resume</a>
          </button>
        </div>
        <Info />
      </div>
    </section>
  )
}

export default About