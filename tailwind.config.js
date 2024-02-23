/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          800: "#001529",
        },
      },
      screens: {
        "4xl": "2000px",
        "18pg": "1400px",
        "1.5xl": "1300px",
      },
    },
  },
  plugins: [],
};
