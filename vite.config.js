import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "./index.css"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://Mutillidae.github.io/briders_holos"
})
