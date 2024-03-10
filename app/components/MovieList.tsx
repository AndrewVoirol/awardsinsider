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

const MovieList: React.FC