import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', 
  build: {
    // 1. Minificación avanzada para reducir los 74.78 KiB de JS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Elimina logs para mejorar limpieza y peso
        drop_debugger: true,
      },
    },
    // 2. Fragmentación de código para romper la cadena crítica
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separa React y Lucide en un archivo aparte para carga paralela
            return 'vendor';
          }
        },
      },
    },
    // Ajuste de límite para evitar advertencias en el build
    chunkSizeWarningLimit: 600,
  },
})