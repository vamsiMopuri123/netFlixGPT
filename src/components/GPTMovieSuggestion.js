import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {
  const movieResults = useSelector(store=>store.gpt?.movieResults);
  const movieName = useSelector(store=>store.gpt?.movieName);
  //const {movieResults,movieName} = gptData;
  return (
    <div className='m-4 p-4 text-white opacity-90'>
      <div className='bg-black'>
       {movieName?.map((movie,index)=><MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}

export default GPTMovieSuggestion
