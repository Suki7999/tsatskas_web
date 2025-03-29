/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://express-with-admin-37fcf5816bab.herokuapp.com/api/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  