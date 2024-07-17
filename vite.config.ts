import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'node:path';
import path from 'path';
// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, 'src');
console.log('pathSrc',pathSrc)

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [vue()],
 
})
