import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[];
}

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movie data on the server using getServerSideProps
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Movies (2023 - 2024)</h1>
      <MovieList movies={movies} />
    </div>
  );
}

// getServerSideProps fetches movie data on the server for each request
export const getServerSideProps = async () => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const currentYear = new Date().getFullYear();

    const [movies2023, movies2024] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${currentYear}`),
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${currentYear + 1}`),
    ]);

    const data2023 = await movies2023.json();
    const data2024 = await movies2024.json();

    const movies: Movie[] = [
      ...data2023.results,
      ...data2024.results,
    ];

    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
      },
    };
  }
};