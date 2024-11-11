import React from 'react';
import MovieCard from './MovieCard';

// Interface defining the structure of a movie object
interface Movie {
  id: number;           // Movie ID (important for unique keys)
  title: string;         // Movie title
  release_date: string;   // Movie release date
  poster_path: string;    // Path to the movie poster image
  overview: string;      // Movie overview/description
  genres: string[];       // Array of genre strings
}

// Interface defining the expected props for MovieList
interface MovieListProps {
  movies: Movie[];       // Array of movie objects
}

// Functional component to render a list of movie cards
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
