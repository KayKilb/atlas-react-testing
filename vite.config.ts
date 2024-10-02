import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Importing Vitest config helper
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/__tests__/**/*.test.tsx'], // Define the test files location
  },
});
