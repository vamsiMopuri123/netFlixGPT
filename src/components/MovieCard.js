import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie_img,movie_title}) =>{
    return(
        <div className="w-48 pr-3">
           <img alt={movie_title} src={IMG_CDN_URL+movie_img}/>
        </div>
    )
}

export default MovieCard;