/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Change build directory to avoid Windows file lock
  distDir: '.next-win2'
}

module.exports = nextConfig 