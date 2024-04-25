import React from 'react'
import Header from '../Header'
import MainContainer from './maincontainer/MainContainer'
import SecondaryContainer from './secondarycontainer/SecondaryContainer'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import usePopularMovies from '../../hooks/usePopularMovies'
import useTopRatedMovies from '../../hooks/useTopRatedMovies'
import useUpcomingMovies from '../../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GeminiSearch from '../geminiai-search/GeminiSearch'



const Browse = () => {
  
   const showGeminiSearch=useSelector( store => store.geminiai.showGeminiSearch)

  useNowPlayingMovies()
   usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  

  return (
    <div>
    <Header/>
    {
      showGeminiSearch? <GeminiSearch/>:
      <>
         <MainContainer/>
        <SecondaryContainer/>
      </>
      

     }
   
      {/*
     MainContaner
                -video background
                -video title 
      SecondaryContainer
                -movielist collection and sections
                -cards*n
    */}
    </div>
  )
}

export default Browse
