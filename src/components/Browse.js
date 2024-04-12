import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'



const Browse = () => {
  
  useNowPlayingMovies()

  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
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
