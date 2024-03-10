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
const MovieCard: React.FC<MovieCardProps> = ({ title, releaseDate, posterPath, overview, genres }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        width={500}
        height={750}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mb-2">Release Date: {releaseDate}</p>
      <p className="text-gray-800">{overview}</p>
      <div className="mt-4">
        {genres.map((genre) => (
          <span key={genre} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;