/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        tepco: {
          red: "#E60012",
          dark: "#1a1a1a",
          gray: "#f5f5f5"
        }
      },
      fontFamily: {
        sans: ['"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', "Meiryo", "sans-serif"]
      }
    }
  },
  plugins: []
};
