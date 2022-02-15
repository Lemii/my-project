import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "lisk-client": path.resolve(
        __dirname,
        "./node_modules/@liskhq/lisk-client/dist-browser/index.min.js"
      ),
    },
  },
});
