import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    
    <div className=' w-screen aspect-video absolute  pt-52 pl-8   text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='w-4/12 py-5 font-bold'>{overview}</p>
      <div className=''>
        <button className='bg-white px-8 py-3 rounded-md text-black font-bold text-lg
        hover:bg-opacity-50'><i className="bi bi-caret-right-fill"></i>play</button>
        <button className='mx-3 bg-gray-500 bg-opacity-40 text-white font-bold px-8 py-3 rounded-md
         hover:bg-white hover:text-black'>More Info</button>
      </div>
    </div>
    
  )
}

export default VideoTitle
