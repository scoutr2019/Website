/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Genereer statische HTML bestanden
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Nodig voor statische export
  },
  trailingSlash: true, // Voeg een slash toe aan het einde van URL's voor betere compatibiliteit
};

export default nextConfig;
