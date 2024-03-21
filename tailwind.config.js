/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#192BC2",
        "blue-secondary": "#A9B1F4",
        "gray-tertiary": "#4C4C50",
      },
    },
  },
  plugins: [],
};
