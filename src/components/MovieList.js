import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)

    

  return (
    <div className=' pt-6 px-5'>
        <div>
            <h1 className='text-white py-5 text-3xl'>{title}</h1>
        </div>
        <div className='grid grid-flow-col grid-rows-1 gap-3 overflow-x-scroll no-scrollbar '>
            {movies&&
            movies?.map( movie=>  <MovieCard  key={movie.id}   poster_path={movie.poster_path} title={movie.title}  /> )
            }
            
        </div>
     
    </div>
  )
}

export default MovieList
