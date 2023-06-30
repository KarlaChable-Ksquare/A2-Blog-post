/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.iepac.mx',
      },
      {
        protocol: 'https',
        hostname: 'www.iepac.mx/2019/img/fotos-personal',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/150/**',
      },
    ],
  },
};

module.exports = nextConfig;
