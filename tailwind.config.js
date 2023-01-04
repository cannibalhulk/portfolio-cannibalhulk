/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'vscode':'#011627',
        'black-darky':'#010C15',
        primary: {
          100: "#01080E",
          200: "#011627",
          300: "#011221",
          400: "#5565E8"
        },

        secondary: {
          100: "#607B96",
          200: "#3C9D93",
          300: "#4D5BCE",
          400: "#1C2B3A"
        },

        accent: {
          100: "#FEA55F",
          200: "#43D9AD",
          300: "#E99287",
          400: "#C98BDF"
        },

        line: "#1E2D3D",

        gradient: {
          100: "#4D5BCE",
          200: "#43D9AD"
        },

      },
      fontFamily: {
        sans: ['var(--font-fira)']
      },
    },
  },
  plugins: [],
}
