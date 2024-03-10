'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
}

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const currentYear = new Date().getFullYear();

      for (let year = currentYear - 1; year <= currentYear; year++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=90078f06850b34ab16852c1885abc47d&primary_release_year=${year}`);
        const data = await response.json();

        // Ensure 'results' exists before mapping
        if (data.results) {
          const formattedMovies = data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview
          }));

          setMovies((prevMovies) => [...prevMovies, ...formattedMovies]);
        } else {
          console.error('API response does not contain "results" array. Check for API errors or rate limiting.');
        }
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <Head>
        <title>Movie App</title>
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Movies (2023 - 2024)</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
