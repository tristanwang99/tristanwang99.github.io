import React from 'react'
import Slider from './Slider'

const Home = () => {
  return (
    <section id='home' className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mt-16 lg:mt-0">
          <h2 className='section-title'>Portfolio</h2>
          <p className='subtitle'>Here are some of my recent projects. Click on the cards below for details.</p>
        </div>
        <Slider />
      </div>
    </section>
  )
}

export default Home