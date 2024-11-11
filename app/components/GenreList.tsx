import React from 'react';

// Interface defining the expected props for GenreList
interface GenreListProps {
  genres: string[]; // Array of genre strings
}

// Functional component to display a list of genres
const GenreList: React.FC<GenreListProps> = ({ genres }) => {
  return (
    <div className="flex flex-wrap">
      {genres.map((genre, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default GenreList;
