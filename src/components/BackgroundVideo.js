import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const BackgroundVideo = ({movie_id}) => {
  
  const trailer= useSelector(store=>store.movie?.movieTrailerVideo);
  useMovieTrailer(movie_id);
  return (
    <div>
      <iframe 
        className='w-screen aspect-video top-0 left-0'
        src={"https://www.youtube.com/embed/Idh8n5XuYIA?si="+trailer?.key+"&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&autohide=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        //allowFullScreen
      ></iframe>
    </div>
  )
}

export default BackgroundVideo
