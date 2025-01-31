const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['via.placeholder.com'],
    },
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development"
    }
  };
  
  module.exports = withPWA(nextConfig);