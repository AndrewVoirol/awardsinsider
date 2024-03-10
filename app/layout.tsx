import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <title>Movie App</title>
      </Head>
      <body className="bg-gray-100 dark:bg-gray-900">
        {/* Add header, navigation, etc. here */}
        {children}
        {/* Add footer here */}
      </body>
    </html>
  );
}