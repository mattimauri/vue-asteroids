import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify'; 

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }) 
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://ssd-api.jpl.nasa.gov',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
