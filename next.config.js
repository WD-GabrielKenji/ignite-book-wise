/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      's3-alpha-sig.figma.com',
      'images.unsplash.com',
    ],
  },
}

module.exports = nextConfig
