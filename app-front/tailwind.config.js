/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Les couleurs seront injectées dynamiquement via CSS variables
      },
    },
  },
  plugins: [],
}
