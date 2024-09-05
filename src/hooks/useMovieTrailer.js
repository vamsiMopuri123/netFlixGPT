import { useEffect } from "react";
import { movieTrailer } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constants";

const useMovieTrailer = (movie_id) =>{
    const dispatch = useDispatch();
    const movieVideo = useSelector(store=>store.movie?.movieTrailerVideo);
    const getOngoingVideo= async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, OPTIONS);
        const json = await data.json();
        console.log(json.results);
        const filterData = json?.results?.filter(list => list.type === "Trailer");
        console.log(filterData);
        const movie_list = filterData.length? filterData[0] : json.results[0];
       // console.log(movie_list);
        dispatch(movieTrailer(movie_list));
      }
    
      useEffect(()=>{
        !movieVideo && getOngoingVideo();
      },[]);

}

export default useMovieTrailer;