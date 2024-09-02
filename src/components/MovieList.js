import { IMG_CDN_URL } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) =>{
    
    return(
        <div className="px-6 bg-transparent">
             <h1 className="text-white text-3xl py-6">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map(movie=> 
                    <MovieCard key={movie.id} movie_title={movie.title} movie_img={movie.poster_path}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList;