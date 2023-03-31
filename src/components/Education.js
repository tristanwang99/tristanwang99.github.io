import React from 'react'

import { educationInfo } from '../data'

const Education = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-items">
        {educationInfo.map((item) => {
          return (
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className='timeline-company'>{item.subtitle}</p>
                <p className='timeline-description'>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Education