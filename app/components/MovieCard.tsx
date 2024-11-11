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
const MovieCard: React.FC<MovieCardProps> = ({ title, releaseDate, posterPath, overview, genres }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        width={500}
        height={750}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{releaseDate}</p>
        <p className="text-gray-800 mb-4">{overview}</p>
        <GenreList genres={genres} />
      </div>
    </div>
  );
};

export default MovieCard;
