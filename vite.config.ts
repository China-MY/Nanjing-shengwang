import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['.serveo.net', '.serveousercontent.com']
  }
})