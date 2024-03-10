import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[]; // Or { id: number; name: string }[] if TMDB returns objects
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC 