import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5180, strictPort: true },
  build: {
    // split vendor libs so the app chunk stays small and caches well
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react')) return 'react'
          if (id.includes('@phosphor-icons')) return 'icons'
          if (id.includes('lenis') || id.includes('framer-motion') || id.includes('gsap')) return 'motion'
          return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
})
