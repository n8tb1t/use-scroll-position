import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig as defineViteConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineViteConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: '/use-scroll-position/',
  define: {
    'process.env': { NODE_ENV: 'production' }
  },
  build: {
    sourcemap: false,
    minify: true
  },
  server: {
    allowedHosts: true,
    port: 80
  }
})
