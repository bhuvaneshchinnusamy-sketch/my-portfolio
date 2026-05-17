import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/', // Set the base path to match the GitHub repository name
  plugins: [react()]
});
