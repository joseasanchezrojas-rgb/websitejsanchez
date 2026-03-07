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
  minify: 'esbuild',
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          // Separamos las librerías grandes para que no bloqueen el renderizado inicial
          return 'vendor';
        }
      },
    },
  },
  // Elimina comentarios y asegura que el código no usado se descarte
  target: 'esnext',
  cssCodeSplit: true,
}
})