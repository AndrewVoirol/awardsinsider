import React from 'react';
import Image from 'next/image';
import GenreList from './GenreList'; // Import the component

const MovieCard: React.FC

interface MovieCardProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  overview: string;
  genres: string[];
}

const MovieCard: React.FC<MovieCardProps> = ({ title, releaseDate, posterPath, overview, genres }) => {
  return (
    <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
      {posterPath && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          width={500}
          height={750}
          layout="responsive"
          className="w-full"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{releaseDate.slice(0, 4)}</p>
        <p className="text-gray-800 dark:text-gray-200 text-balance">{overview}</p>
        <GenreList genres={genres} /></div>
    </div>
  );
};

export default MovieCard;