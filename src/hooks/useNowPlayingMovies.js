import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/movieSlice'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const useNowPlayingMovies=()=>{
     // fecth data from TMDB API and update store with the result
  const dispatch=useDispatch()

  useEffect(()=>{
     getPlayingMovies()
  },[])

  const getPlayingMovies=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)

    const json=await data.json()
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }
}

export default useNowPlayingMovies;