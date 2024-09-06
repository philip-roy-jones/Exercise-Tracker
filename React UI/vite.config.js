import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/exercises': {
        target: 'https://exercise-tracker-backend-5nzw.onrender.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
