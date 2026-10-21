import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/techtonic-26/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore'],
          ui: ['lucide-react', 'qrcode', 'canvas-confetti'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
