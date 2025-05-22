import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path-browserify'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port : 3000
  },
  resolve:{
    alias:[
      {find:'@', replacement:path.resolve('.')},
      {find:'@package', replacement:path.resolve('./package')},
      {find:'@src', replacement:path.resolve('./src')}
    ]
  },
  build: {
    outDir: 'dist',  // output directory 맞춰주기
  },
})
