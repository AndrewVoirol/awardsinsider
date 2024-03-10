import MovieCard from './MovieCard';
import React from 'react';

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[];
}

interface MovieListProps {
  movies: Movie[];
}

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