import { API_OPTIONS } from "../utils/constants"
import {useDispatch, useSelector} from 'react-redux'
import { addUpcomingMovies } from "../store/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies=()=>{

const dispatch=useDispatch()

const upcomingMovies=useSelector( store=> store.movies.upcomingMovies)
  
    const getUpcomingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
        const json=await data.json()
        console.log(json.results)
        dispatch(addUpcomingMovies(json.results))
    }

      useEffect(()=>{
        // if the upComing movies are not in the store then only make an api call
       !upcomingMovies && getUpcomingMovies()
    },[])

}

export default useUpcomingMovies;
