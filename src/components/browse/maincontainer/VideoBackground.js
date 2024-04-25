import useMovieTrailer from "../../../hooks/useMovieTrailer"
import {useSelector} from 'react-redux'

const VideoBackground = ({movieId}) => {

 const trailerVideo=useSelector( store=> store.movies.trailerVideo)
 useMovieTrailer(movieId)

  return (
    <div className="md:p-0 md:m-0 pt-20 ">
      {/* embeded youtube video using trailer key */}
      <iframe 
      className="w-screen aspect-video "
      
     src={"https://www.youtube.com/embed/"+trailerVideo?.key+'?si=Qo4drHSdu3NYAmNv?&autoplay=1&mute=1&showInfo=0'}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      frameBorder='0'
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackground
