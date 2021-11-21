module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6BD5ED',
        primaryHover: '#3C96AA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
