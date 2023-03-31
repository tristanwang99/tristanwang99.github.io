import React from 'react'
<<<<<<< HEAD
import Projects from './Projects'

const Portfolio = () => {
  return (
    <section id="portfolio" className='section bg-primary min-h-[1400px]'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block'>
            Portfolio
          </h2>
          <p className='subtitle'>
            Here are some of my recent projects. Click on any card below to view the GitHub repo.
          </p>
=======
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <section id='home' className='section bg-primary min-h-[1400px]'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title'>Portfolio</h2>
          <p className='subtitle'>Here are some of my recent projects. Click on the cards below for details.</p>
>>>>>>> 2654573... first commit
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio