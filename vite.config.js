import { defineConfig } from 'vite';
import { resolve } from 'path';
import imageminPlugin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imageminPlugin({
      gifsicle: { optimizationLevel: 7, interlaced: true },
      mozjpeg: { quality: 85 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: false },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        global: resolve(__dirname, 'src/global.scss'),
        popover: resolve(__dirname, 'src/components/popover/popover.scss'),
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            if (name.includes('global')) {
              return 'assets/css/global.css';
            }
            if (name.includes('popover')) {
              return 'assets/css/popover.css';
            }
            return 'assets/css/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
