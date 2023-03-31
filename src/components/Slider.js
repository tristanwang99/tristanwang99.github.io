import React from 'react'
import { portfolioInfo } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../swiper.css'
import { Autoplay, Pagination } from 'swiper'

const Slider = () => {
  return (
    <>
      <Swiper pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: true }} modules={[Autoplay, Pagination]} className='mySwiper lg:h-[400px]'>
        {portfolioInfo.map((item, index) => {
          const { title, image, skills, description, link } = item
          return <SwiperSlide key={index}>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
              <div className='pf-image-container lg:ml-8'>
                <img className='rounded-2xl' src={image} alt="" />
              </div>
              <div className="flex flex-col items-start pf-info-container lg:mr-8">
                <h3 className='text-2xl lg:font-bold mb-6'>{title}</h3>
                <div className='pf-skills mb-6'>
                  {skills.map((item, index) => {
                    return (
                      <img key={index} className='pf-skill-icon' src={item} alt="" />
                    )
                  })}
                </div>
                <p className='mb-6'>{description}</p>
                <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all mb-16 lg:mb-24'>
                  <a href={link}>View Project</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default Slider