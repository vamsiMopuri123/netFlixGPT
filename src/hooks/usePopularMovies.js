import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from '../utils/constants';
import { popularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovie=useSelector(store=>store.movie?.onPopularMovies);
    const onPlayingMovies = async()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS)
       const json = await data.json();
      // console.log(json.results);
       dispatch(popularMovies(json.results))
    }
  
    useEffect(()=>{
       !popularMovie && onPlayingMovies();
    },[])
}

export default usePopularMovies;
