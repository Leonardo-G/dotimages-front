/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: { 
    domains: ['pixabay.com', "cdn.pixabay.com", "media2.giphy.com", "media4.giphy.com", "media1.giphy.com", "media3.giphy.com", "edeal.cl"] 
  } 
}

module.exports = nextConfig
