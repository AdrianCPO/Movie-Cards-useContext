import { MovieCardForm } from "./MovieCardForm";
import { MovieCard } from "./MovieCard";
import { MovieContextProvider } from "../MovieContextProvider";

export function App() {
  return (
    <MovieContextProvider>
      <MovieCardForm />
      <MovieCard />
    </MovieContextProvider>
  );
}
