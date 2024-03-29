/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microsms-assets.io']
  }
}

export default nextConfig
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**'
      }
    ]
  }
}

export default nextConfig
