import React from 'react'
import MovieList from './MovieList';
import {useSelector} from 'react-redux'


const SecondaryContainer = () => {

 const movies=useSelector( store=> store.movies)  

  return (
    movies&&(
    <div className=' bg-black  -mt-3   md:-mt-32 relative z-20' >
      <MovieList  title={"nowplayingMovies"} movies={movies.nowPlayingMovies} />
     <MovieList  title={"popular"} movies={movies.popularMovies} />
      <MovieList  title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList  title={"upcoming"} movies={movies.upcomingMovies} />
      
       
      {/* 
      movie list
      movieCards*n
            -nowplaying
            -popular
            -trending
            -horror
       */}
       
   </div>)
    
      )
}

export default SecondaryContainer;
