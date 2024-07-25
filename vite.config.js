import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/madrocket/', // The base path should match your repository name
  plugins: [react()]
});
