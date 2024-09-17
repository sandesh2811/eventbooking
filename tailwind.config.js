/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        ClashDisplay: ["ClashDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
};
