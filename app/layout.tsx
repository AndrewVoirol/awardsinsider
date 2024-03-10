// app/layout.tsx

import React from 'react';
import Head from 'next/head'; // Import Head for setting page metadata

// Functional component for the root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
      
        {/* Set page title and other metadata here */}
        
      
      
        {children} {/* Render the content passed as children */}
      
    
  );
}