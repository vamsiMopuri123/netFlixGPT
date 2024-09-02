import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../utils/constants';
import { popularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const onPlayingMovies = async()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS)
       const json = await data.json();
      // console.log(json.results);
       dispatch(popularMovies(json.results))
    }
  
    useEffect(()=>{
        onPlayingMovies();
    },[])
}

export default usePopularMovies;
