// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        // protocol: 'https', // Uncomment if needed
        hostname: 'image.tmdb.org',
        // port: '', // Uncomment if needed
        // pathname: '/account123/**', // Uncomment if needed
      },
    ],
  },
};