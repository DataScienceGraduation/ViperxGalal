/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export const content = ["./*.{html,js}"];
export const theme = {
  screens: {
    md: '880px'
  },
  extend: {
    fontFamily: {
      'heming': ['Heming', 'sans-serif']
    },
    gridTemplateColumns: {
      'auto-fill-100': 'repeat(auto-fill, minmax(340px, 1fr))',
      'auto-fit-100': 'repeat(auto-fit, minmax(340px, 1fr))',
    }
  },
};
export const plugins = [];


