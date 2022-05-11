import { useEffect ,useState} from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  // let movies = [];
  const [movies, setMovies] = useState([]);

  useEffect(() => [
    fetch("https://api.themoviedb.org/3/discover/movie" , {
      headers:{
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2IzYWEzNTBkNmNiNDM1MTdiYTA4NTc4NDA5YTJkYSIsInN1YiI6IjYyN2IwMGVjZWVjNGYzMDA5ZDI4ZGMyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_rp18LLQInHCLwTNOVgMvj7rOPxeQeQtObRN-GbTk4",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then(result => result.json())
      .then(data =>{
        setMovies(data.results);
      }),
  ]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
