import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../utils/constants';
import { upcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const onPlayingMovies = async()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS)
       const json = await data.json();
      // console.log(json.results);
       dispatch(upcomingMovies(json.results))
    }
  
    useEffect(()=>{
        onPlayingMovies();
    },[])
}

export default useUpcomingMovies;
