/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        faith: {
          gold: '#F4C430',
          blue: '#1E3A8A',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        scripture: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}

