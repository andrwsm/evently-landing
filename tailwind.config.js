
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
        'light-blue': '#87CEEB'
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #33479d 2px, transparent 2px)',
      },
      backgroundSize: {
        'dot-pattern': '16px 16px', // Adjust the size and spacing here
      },
    },
  },
  plugins: [],
}

