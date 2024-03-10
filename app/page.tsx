import React from 'react';
import { GetStaticProps } from 'next';
import MovieList from './components/MovieList';

// Define the Movie interface with the correct properties
interface Movie {
  id: number; // Added id property to match TMDB data
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[]; // Assuming TMDB returns genres as strings
}

// Define the PageProps interface
interface PageProps {
  movies: Movie[];
}

// The HomePage component receives movies as props and renders MovieList
export default function HomePage({ movies }: PageProps) {
  return (
    <div>
      <Head>
        <title>Movie App</title>
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Movies Released in 2023 and 2024</h1>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

// getStaticProps fetches movie data at build time
export const getStaticProps = async () => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const currentYear = new Date().getFullYear();

    const [movies2023, movies2024] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${currentYear}`),
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${currentYear + 1}`),
    ]);

    const data2023 = await movies2023.json();
    const data2024 = await movies2024.json();

    // Ensure the returned data matches the Movie interface
    const movies: Movie[] = [
      ...data2023.results.map((movie: any) => ({ ...movie, id: movie.id })), // Add id if needed
      ...data2024.results.map((movie: any) => ({ ...movie, id: movie.id })), // Add id if needed
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