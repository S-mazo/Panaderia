/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Habilitar exportación estática para GitHub Pages
  basePath: '/Panaderia',  // Necesario porque el repo no está en la raíz del dominio
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // Necesario para sitios estáticos
  },
}

export default nextConfig
