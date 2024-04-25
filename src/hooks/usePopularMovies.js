import { API_OPTIONS } from "../utils/constants"
import {useDispatch, useSelector} from 'react-redux'
import { addPopularMovies } from "../store/movieSlice"
import { useEffect } from "react"

const usePopularMovies=()=>{

const dispatch=useDispatch()

const popularMovies=useSelector( store => store.movies.popularMovies)
  
    const getPopularMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS)
        const json=await data.json()
        console.log(json.results)
        dispatch(addPopularMovies(json.results))
    }

      useEffect(()=>{
        // if the popularMovies are not in the store then only make an api call
       !popularMovies && getPopularMovies()
    },[])

}

export default usePopularMovies;