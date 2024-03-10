import React from 'react';

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: { id: number; name: string }[]; // Or string[] if TMDB returns strings
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC