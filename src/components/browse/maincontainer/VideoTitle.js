import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    
    <div className=' w-screen aspect-video absolute  md:pt-52 pt-40 pl-5 sm:pl-6   md:pl-8   text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl  md:text-5xl font-bold'>{title}</h1>
      <p className='hidden sm:hidden md:inline-block w-4/12 py-5 font-bold tracking-wide leading-5'>{overview}</p>
      <div className=''>
        <button className='bg-white py-1 px-4   md:px-8 md:py-3 rounded-md text-black font-bold mt-2 text-sm  md:text-lg
        hover:bg-opacity-50'><i className="bi bi-caret-right-fill"></i>play</button>
        <button className='hidden md:inline-block mx-3 bg-gray-500 bg-opacity-40 text-white font-bold px-8 py-3 rounded-md
         hover:bg-white hover:text-black'>More Info</button>
      </div>
    </div>
    
  )
}

export default VideoTitle
