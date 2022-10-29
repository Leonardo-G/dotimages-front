/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: { 
    domains: ['pixabay.com', "cdn.pixabay.com", "media2.giphy.com"] 
  } 
}

module.exports = nextConfig
