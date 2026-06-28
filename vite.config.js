import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // السطر ده السحري الجديد!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // وبناديه هنا
  ],
})