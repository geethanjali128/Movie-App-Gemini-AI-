import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({poster_path,title}) => {
  return (
    <div className='w-40 '>
      <img src={IMG_URL+poster_path}  alt={title} />
    </div>
  )
}

export default MovieCard
