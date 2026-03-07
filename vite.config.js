import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',
  build: {
    // Usamos esbuild (por defecto) para evitar errores de dependencias faltantes
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        // Mantenemos la fragmentación para mejorar la latencia de 636ms
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  }
})