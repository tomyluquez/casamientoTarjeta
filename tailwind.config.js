/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
      title: ['Dancing Script', 'sans-serif'],
      body: ['Edu SA Beginner', 'sans-serif'],
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        timer: '#EADBC8',
        button: '#F8F0E5',
        orange: '#FD8D14',
        white: '#fafafa',
        gray: 'gray',
        error: 'red',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
