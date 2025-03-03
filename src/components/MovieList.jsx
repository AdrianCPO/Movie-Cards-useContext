import { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { MovieContext } from "../MovieContextProvider";

export function MovieList() {
  console.log("MovieList renderas!");
  const { movies, onDelete } = useContext(MovieContext);
  console.log("movies:", movies);

  return (
    <form>
      {movies.map((movie) => (
        <ul key={movie.id}>
          <MovieCard movie={movie} />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("onDelete körs");
              onDelete(movie.id);
            }}
          >
            Delete
          </button>
        </ul>
      ))}
    </form>
  );
}
