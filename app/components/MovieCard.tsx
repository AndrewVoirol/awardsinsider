import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  overview: string;
  genres: string[]; // Or { id: number; name: string }[] if TMDB returns objects
}

const MovieCard: React.FC