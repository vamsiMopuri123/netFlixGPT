import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store=>store.movie?.onPlayingMovies)
    console.log(movies);
    if(!movies) return;
    const mainMovie=movies[0];
    const {original_title,overview,id} = mainMovie;
     console.log(mainMovie)
    // console.log(original_title);
  return (
    <div className='pt-[40%] bg-black md:pt-0'>
        <VideoTitle original_title={original_title} overview={overview}/>
        <BackgroundVideo movie_id={id}/>
        
    </div>
  )
}

export default MainContainer;
