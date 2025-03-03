import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState(() => {
    const storedMovies = localStorage.getItem("movies");
    return storedMovies ? JSON.parse(storedMovies) : [];
  });
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]); // Lägg till movies som dependency

  const onDelete = (movieId) => {
    console.log("onDelete körs");
    console.log("movieId:", movieId);
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        title,
        setTitle,
        rating,
        setRating,
        genre,
        setGenre,
        description,
        setDescription,
        onDelete,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
