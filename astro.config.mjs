// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react()],

  // Optimizaciones de rendimiento
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [
              '@vercel/analytics',
            ]
          }
        }
      }
    },
    ssr: {
      noExternal: ['@vercel/analytics']
    }
  },

  // Configuración de compilación optimizada
  build: {
    inlineStylesheets: 'auto',
  }
});