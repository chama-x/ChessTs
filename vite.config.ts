import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        dimensions: true,
      },
      include: '**/pieces/**/*.svg',
    }),
    dts({ 
      include: ['src'],
      exclude: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
      rollupTypes: true
    }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ChessTs',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'chess.js'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'chess.js': 'Chess'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name;
        }
      }
    }
  },
  assetsInclude: ['**/*.svg', '**/*.json'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  json: {
    stringify: true
  }
})
