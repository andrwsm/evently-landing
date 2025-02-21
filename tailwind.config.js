
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'midnight-sky': '#2a2874',
        'dark-sky': '#33479d',
        'grey': '#474748',
        'black': '#232323',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #33479d 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '10px 10px', // Adjust the size and spacing here
      },
    },
  },
  plugins: [],
}

