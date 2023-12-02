/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#677294",
          400: "#007bff",
          500: "#1c335f",
        },
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
