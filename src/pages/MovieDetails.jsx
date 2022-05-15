import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import style from "./MovieDetails.module.css";

export function MovieDetails(){
  
    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [movie, setMovie] = useState(null);

     
     
    useEffect(() => {
          setIsLoading(true);

           get("/movie/" + movieId).then((data) => { 
            setMovie(data);
            setIsLoading(false);
         });
     }, [movieId]);

     if (isLoading) {
       return <Spinner />;
     }

 
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
     return <div className={style.detailsContainer}>
                  <img 
                  className={`${style.col} ${style.movieImage}`} 
                  src= {imageUrl} 
                  alt={movie.title}
                  />
                  <div className={ `${style.col} ${style.movieDetails}`} >
                         <p>
                             <strong>Title:</strong> {movie.title}
                        </p>
                        <p className={style.firstItem}>
                             <strong>Genres:</strong>{" "}
                            {movie.genres.map((genre) => genre.name).join(", ")}
                       </p>
                       <p>
                          <strong>Description:</strong> {movie.overview}
                      </p>
                 </div>
           </div>;
}