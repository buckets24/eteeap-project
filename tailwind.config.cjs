/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#FFFFFF',
        bg: {
          card: '#333333',
          dark: '#424141',
          light: '#FEF5EF'
        },
        body: {
          light: '#F4F4F4',
          dark: 'rgb(110, 117, 159)',
          ink500: '#7C8A90',
          ink800: '#263237'
        },
        primary: "#6AB5B9",
        secondary: "#FD7590"
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
}
