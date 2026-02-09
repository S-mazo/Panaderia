/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Habilitar exportación estática
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // Necesario para sitios estáticos
  },
}

export default nextConfig
