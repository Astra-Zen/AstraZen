import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AstraZen/', // Correct base path for the repository
  plugins: [react()],
});
