import { API_OPTIONS } from '../utils/constants'
import {useDispatch, useSelector} from 'react-redux'
import { addTrailerVideo } from '../store/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer=(movieId)=>{

  console.log("movieId",movieId)
      // fetch trailer video and updating the store with trailerVideo data
  const dispatch=useDispatch()

  const trailerVideo=useSelector( store => store.movies.trailerVideo)

  useEffect(()=>{
        // if trailerVideo is not there in store then only make api call
      !trailerVideo && getMovieVideo()
    },[])


   const getMovieVideo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const json=await data.json()
        console.log("video",json.results)
         const filterVideos= json.results.filter( video => video.type==='Trailer')
         const trailer=filterVideos.length?filterVideos[0]:json.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    
}

export default useMovieTrailer;