/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      height: {
        'half-screen': '50vh',
      },
    },
    container: {
      center: true,
           
    },
  },
  plugins: [],
}

