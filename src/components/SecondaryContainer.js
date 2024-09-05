import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie);
  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-60 relative z-20 pl-2 md:pl-4'>
      <MovieList title={"OnPlaying"} movies={movies?.onPlayingMovies}/>
      <MovieList title={"TopRated"} movies={movies?.onTopRatedMovies}/>
      <MovieList title={"Popular"} movies={movies?.onPopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.onUpcomingMovies}/>
      <MovieList title={"Horror"} movies={movies?.onPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;
