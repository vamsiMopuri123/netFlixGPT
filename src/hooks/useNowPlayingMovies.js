import { useDispatch } from "react-redux";
import { addOnPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch();
  const onPlayingMovies = async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
     const json = await data.json();
    // console.log(json.results);
     dispatch(addOnPlayingMovies(json.results))
  }

  useEffect(()=>{
      onPlayingMovies();
  },[])
}

export default useNowPlayingMovies;