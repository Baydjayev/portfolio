import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Vercel, assets are served from root. GitHub Pages would need '/portfolio/'.
  base: '/',
  build: {
    outDir: 'dist',
  },
})
