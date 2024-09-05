import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from '../utils/constants';
import { topRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topMovies= useSelector(store=>store.movie?.onTopRatedMovies);
    const onPlayingMovies = async()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS)
       const json = await data.json();
      // console.log(json.results);
       dispatch(topRatedMovies(json.results))
    }
  
    useEffect(()=>{
       !topMovies && onPlayingMovies();
    },[])
}

export default useTopRatedMovies;
