import { useDispatch, useSelector } from "react-redux";
import { addOnPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch();
  const nowPlayMovie=useSelector(store=>store.movie?.onPlayingMovies);
  const onPlayingMovies = async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
     const json = await data.json();
    // console.log(json.results);
     dispatch(addOnPlayingMovies(json.results))
  }

  useEffect(()=>{
     !nowPlayMovie && onPlayingMovies();
  },[])
}

export default useNowPlayingMovies;