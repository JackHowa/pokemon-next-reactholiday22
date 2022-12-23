/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
        port: ""
      },
      // github user profile images
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
        port: ""
      }
    ]
  }
}

module.exports = nextConfig
