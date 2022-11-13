/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: { 
    domains: ["media0.giphy.com", 'pixabay.com', "cdn.pixabay.com", "media2.giphy.com", "media4.giphy.com", "media1.giphy.com", "media3.giphy.com", "edeal.cl", "kubalubra.is"] 
  } 
}

module.exports = nextConfig
