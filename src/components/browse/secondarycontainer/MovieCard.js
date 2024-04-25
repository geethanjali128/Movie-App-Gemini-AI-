import React from 'react'
import { IMG_URL } from '../../../utils/constants'

const MovieCard = ({poster_path,title}) => {
  
  return (
    <div className='md:w-40 w-28 sm:w-32 '>
     {poster_path &&  <img src={IMG_URL+poster_path}  alt={title} />} 
    </div>
  )
}

export default MovieCard
