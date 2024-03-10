//app/page.tsx

'use client'; // Mark as a client component
import Head from 'next/head';
import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

// Interface defining the structure of a movie object (same as in MovieList.tsx)
interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[];
}

// Functional component for the home page
export default function HomePage() {
  const [movies, setMovies] = useState