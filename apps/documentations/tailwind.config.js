const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const tailwindBaseConfig = require('./tailwind-base.config');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      ...tailwindBaseConfig,
      fontFamily: {
        'nunito-sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        'ibm-plex-sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-foreground-brand': {
          background:
            'linear-gradient(to right, #0546FF 5%, #F637E3 15%, #FA2C04 75%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    }),
  ],
};
