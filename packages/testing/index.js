const path = require('node:path');
const react = require('@vitejs/plugin-react');
const { defineConfig } = require('vitest/config');

const config = defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      // '@' alias should be set by each app's vitest.config.ts
      '@packages': path.resolve(__dirname, '../../packages'),
    },
  },
});

module.exports = config;
