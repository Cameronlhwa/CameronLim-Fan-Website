import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CameronLim-Fan-Website/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html' // Explicit entry point
    }
  }
});