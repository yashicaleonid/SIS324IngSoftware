/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'marron': '#CB994E',
      'marron-claro': '#E2DCCC',
      'anaranjado': '#FFB902',
      'ladrillo-oscuro': '#dc6525',
      'ladrillo': '#E2B7A0',
      'black': '#000000',
      
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right,rgb(249, 131, 50),rgb(239, 219, 168),rgb(250, 140, 50))',
    },
  },
};
export const plugins = [];