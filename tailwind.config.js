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
      },
    },
  },
  plugins: [],
};
