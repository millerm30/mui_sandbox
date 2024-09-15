import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/tests/*.cy.{js,jsx,ts,tsx}',
  },
  viewportHeight: 800,
  viewportWidth: 1200,
});
