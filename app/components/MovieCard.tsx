import React from 'react';
import Image from 'next/image';

// Define the MovieCardProps interface with the correct genres type
interface MovieCardProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  overview: string;
  genres: string[]; // Genres are strings
}

// The MovieCard component renders a single movie card
const MovieCard: React.FC