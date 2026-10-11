import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base configurable para desplegar en un subdirectorio de GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
