import React from 'react';
import { Metadata } from 'next'; // Import Metadata for setting page metadata

// Functional component for the root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Metadata>
        <title>Movie App</title>
      </Metadata>
      {children} {/* Render the content passed as children */}
    </div>
  );
}