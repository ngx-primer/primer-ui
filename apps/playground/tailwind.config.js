const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const baseTheme = require('./tailwind-base.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      ...baseTheme,
      // place theme here
    },
  },
  plugins: [],
};
