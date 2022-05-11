import movie from "./movie.json";
import style from "./MovieDetails.module.css";

export function MovieDetails(){
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
return <div className={style.detailsContainer}>
     <img className={`${style.col} ${style.movieImage}`} src= {imageUrl} alt={movie.tittle}/>
     <div className={ `${style.col} ${style.movieDetails}`} >
         <p>
             <strong>Title:</strong> {movie.title}
        </p>
        <p className={style.firstText }>
            <strong>Genres:</strong>{" "}
            {movie.genres.map(genre => genre.name).join(", ")}
        </p>
         <p>
             <strong>Description:</strong> {movie.overview}
        </p>
     </div>
    </div>;
}