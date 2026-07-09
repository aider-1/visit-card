import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built static files work when hosted from any sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
