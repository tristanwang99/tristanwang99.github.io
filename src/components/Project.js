import React from 'react'
<<<<<<< HEAD

const Project = ({ item }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className="mb-8">
        <img onClick={() => openInNewTab(item.repo)} className='rounded-2xl cursor-pointer' src={item.image} alt="" />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 onClick={() => openInNewTab(item.repo)} className='text-2xl font-semibold capitalize mb-3 cursor-pointer'>{item.name}</h3>
=======
import { FiExternalLink } from 'react-icons/fi'

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 work'>
        <img className='rounded-2xl' src={item.image} alt="" />
        <div className='layer'>
          <a className='text-base cursor-pointer'><FiExternalLink /></a>
        </div>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3 cursor-pointer'>{item.name}</h3>
>>>>>>> 2654573... first commit
    </div>
  )
}

export default Project