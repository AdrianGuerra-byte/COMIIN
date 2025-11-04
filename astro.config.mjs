// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  
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