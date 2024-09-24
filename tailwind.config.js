/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      myColor: "rgba(81, 38, 137, 1)",
      white: "rgba(255, 255, 255, 1)",
      black: "rgba(0, 0, 0, 1)",
      gray: "rgba(248, 248, 248, 1)",
      myPurple: "rgba(81, 38, 137, 1)",
    },
    extend: {},
  },
  plugins: [],
}

