/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './page-components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        clashGrotesk: ['Clash Grotesk', 'sans-serif'],
      },
      backgroundColor: {
        darkBackgroundSecondary: '#131619',
        darkBackgroundPrimary: '#0D0F10',
        darkAccent1: '#202429',
        darkAccent2: '#35373E',
        orangeDark: '#FD7972',
      },
      textColor: {
        darkText: '#35373E',
      },
      borderColor: {
        grayBorder: '#797A7E',
        grayBorderLight: '#35373E',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
