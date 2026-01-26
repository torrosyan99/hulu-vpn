import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from "path";

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src/shared/assets/icons'),
    }
  },
  css: {
    modules: {
      generateScopedName:   mode === 'development' ?
        '[name]__[local]___[hash:base64:5]' : '[hash:base64:8]',

    }
  }
}))
