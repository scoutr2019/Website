/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Voeg deze regel toe om problemen met client-side navigatie op te lossen
  experimental: {
    appDocumentPreloading: false
  }
};

export default nextConfig;
