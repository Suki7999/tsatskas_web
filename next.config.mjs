/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://express-with-admin-37fcf5816bab.herokuapp.com/api/:path*',
        // destination: 'http://localhost:5000/api/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  