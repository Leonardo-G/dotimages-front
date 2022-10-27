/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: { 
    domains: ['pixabay.com', "cdn.pixabay.com"] 
  } 
}

module.exports = nextConfig
