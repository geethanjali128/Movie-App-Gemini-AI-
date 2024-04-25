import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../store/movieSlice'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

const useNowPlayingMovies=()=>{
     // fecth data from TMDB API and update store with the result
  const dispatch=useDispatch()

const nowPlayingMovies=useSelector( store => store.movies.nowPlayingMovies)

  useEffect(()=>{
    // if  nowPlayingMovies are not in the store then only make api call
   !nowPlayingMovies && getPlayingMovies()
  },[])

  const getPlayingMovies=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)

    const json=await data.json()
    console.log("now_playing",json.results)
    dispatch(addNowPlayingMovies(json.results))
  }
}

export default useNowPlayingMovies;