//app/components/GenreList.tsx
import React from 'react';

// Interface defining the expected props for GenreList
interface GenreListProps {
  genres: string[]; // Array of genre strings
}

// Functional component to display a list of genres
const GenreList: React.FC