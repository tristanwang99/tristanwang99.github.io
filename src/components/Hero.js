import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center">
            <p className='text-lg text-accent mb-[22px]'>Hi, I'm Tristan</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] pb-8'
            >
              Welcome to my website.
            </h1>
            <Link to="about" spy={true} smooth={true}>
              <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero