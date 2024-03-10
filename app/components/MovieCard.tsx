// app/components/MovieCard.tsx 
import React from 'react';
import Image from 'next/image';
import GenreList from './GenreList'; // Import GenreList component

// Interface defining the expected props for MovieCard
interface MovieCardProps {
  title: string;         // Movie title
  releaseDate: string;   // Movie release date
  posterPath: string;    // Path to the movie poster image
  overview: string;      // Movie overview/description
  genres: string[];       // Array of genre strings
}

// Functional component to render a single movie card
const MovieCard: React.FC