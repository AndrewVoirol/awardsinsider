import React from 'react';
import { GetStaticProps } from 'next';
import MovieList from './components/MovieList';

// Define the Movie interface to ensure type safety
interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[]; // Or { id: number; name: string }[] if TMDB returns objects
}

// Define the PageProps interface to specify the expected props for the page
interface PageProps {
  movies: Movie[];
}

// The HomePage component receives movies as props and renders MovieCard components
export default function HomePage({ movies }: PageProps) {
  return (
    
      Movies Released in 2023 and 2024
      
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
    const movies: Movie[] = [...data2023.results, ...data2024.results];

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