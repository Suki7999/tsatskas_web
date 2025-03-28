/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // All requests starting with /api will be proxied
          destination: 'http://localhost:3034/api/:path*', // Forward the requests to the backend server
        },
      ];
    },
  };
  
  export default nextConfig;
  