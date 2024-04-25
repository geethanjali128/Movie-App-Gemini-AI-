import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../browse/secondarycontainer/MovieList'

const GeminiMovieSuggestions = () => {
    const{movieNames,movieResults}=useSelector( store => store.geminiai)

    // const filteresMovieResults=movieResults.filter( movie=> movie.poster_path )


  return (
    <div className='mt-10 w-screen absolute z-10  px-5 mx-5 bg-black bg-opacity-55 text-white  text-4xl  '>
      
      <div className=' mx-3'>
        { movieNames ? (movieNames?.map((movieName,index)=>(
            <MovieList  key={movieName} title={movieName}  movies={movieResults[index]} />
        )

        )):(<h1 className='flex justify-center'>No Search Results</h1>)}
      </div>

    </div>
  )
}

export default GeminiMovieSuggestions;
